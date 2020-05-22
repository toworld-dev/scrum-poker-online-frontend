import { call, fork, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import { Socket } from 'socket.io';

import { listenVotes, listenResult } from './actions';
import { store } from '../..';
import envrironment from '../../../config/environment';
import { VoteTypes } from './types';
import { AuthTypes } from '../auth/types';

function connect() {
  const {
    auth: { data },
  } = store.getState();

  if (data?.token) {
    const socket = io(`${envrironment.socketURL}vote`, {
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
    socket.on('votes', (data: any) => {
      emit(listenVotes(data));
    });

    socket.on('result', (data: any) => {
      emit(listenResult(data));
    });

    socket.on('reconnect', () => {
      socket.emit('showVotes');
    });

    socket.emit('showVotes'); // onStart

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
export function* writeCreateVote(socket: Socket) {
  while (true) {
    const { payload } = yield take(VoteTypes.VOTE);
    socket.emit('createVote', payload);
  }
}

export function* writeShowResults(socket: Socket) {
  while (true) {
    const { payload } = yield take(VoteTypes.SHOW_RESULT);
    socket.emit('showResult', payload);
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
    yield fork(writeCreateVote, socket);
    yield fork(writeShowResults, socket);
    yield fork(disconnect, socket);
  }
}
