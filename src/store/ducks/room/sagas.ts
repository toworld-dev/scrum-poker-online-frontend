import { call, fork, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import { Socket } from 'socket.io';

import { listenTopic } from './actions';
import { store } from '../..';
import envrironment from '../../../config/environment';
import { RoomTypes } from './types';
import { listenVotes, listenResult } from '../vote/actions';
import { Vote } from '../vote/types';
import { AuthTypes } from '../auth/types';

function connect() {
  const {
    auth: { data },
  } = store.getState();

  if (data?.token) {
    const socket = io(`${envrironment.socketURL}room`, {
      query: {
        token: data?.token,
      },
    });
    return new Promise(resolve => {
      socket.on('connect', () => {
        resolve(socket);
      });
    });
  }
  return false;
}

function subscribe(socket: Socket) {
  return eventChannel((emit: any) => {
    socket.on('room', (data: any) => {
      emit(listenTopic(data));
    });

    socket.on('newTopic', () => {
      emit(listenVotes({} as Vote));
      emit(listenResult([]));
    });

    socket.on('reconnect', () => {
      socket.emit('showTopic');
    });

    socket.emit('showTopic'); // onStart

    return () => {};
  });
}

function* read(socket: Socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

// Write functions
export function* write(socket: Socket) {
  while (true) {
    const { payload } = yield take(RoomTypes.CREATE);
    socket.emit('createTopic', payload);
  }
}

export function* disconnect(socket: Socket) {
  let logout = false;

  while (!logout) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { payload } = yield take(AuthTypes.LOGOUT);
    socket.disconnect();
    logout = true;
  }
}

// Start
export function* start() {
  const socket = yield call(connect);

  if (socket) {
    yield fork(read, socket);
    yield fork(write, socket);
    yield fork(disconnect, socket);
  }
}
