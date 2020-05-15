import { call, fork, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import { Socket } from 'socket.io';

import { listenOnline } from './actions';
import { setMyClientId } from '../auth/actions';
import { store } from '../..';
import envrironment from '../../../config/environment';

function connect() {
  const {
    auth: { data },
  } = store.getState();

  if (data?.token) {
    const socket = io(`${envrironment.socketURL}account`, {
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
    socket.on('online', (data: any) => {
      emit(setMyClientId(socket.id));
      emit(listenOnline(data));
    });

    socket.on('reconnect', () => {
      socket.emit('showOnline');
    });

    socket.emit('showOnline'); // onStart

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

// Start
export function* start() {
  const socket = yield call(connect);

  if (socket) {
    yield fork(read, socket);
  }
}