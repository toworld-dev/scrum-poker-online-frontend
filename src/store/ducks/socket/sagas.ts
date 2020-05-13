import { call, fork, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import { Socket } from 'socket.io';

import { listenOnline } from './actions';
import { SocketTypes } from './types';
import { store } from '../..';

function connect() {
  const {
    auth: { data },
  } = store.getState();

  if (data?.token) {
    const socket = io('http://localhost:3000/', {
      query: {
        token: data?.token,
      },
    });
    return new Promise(resolve => {
      socket.on('connect', () => {
        resolve(socket);
        console.log('Socket connected');
      });
    });
  }
  return false;
}

function subscribe(socket: Socket, channelName: string) {
  switch (channelName) {
    default:
    case 'online':
      return eventChannel((emit: any) => {
        socket.on('room.online', (data: any) => {
          console.log('listenOnline', data);
          emit(listenOnline(data));
        });

        socket.on('reconnect', (data: any) => {
          console.log('reconnect', data);
        });

        socket.on('disconnect', (data: any) => {
          console.log('disconnect', data);
        });

        return () => {};
      });
  }
}

function* read(socket: Socket, channelName: string) {
  const channel = yield call(subscribe, socket, channelName);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

// Write functions
export function* handleOnline(socket: Socket) {
  while (true) {
    const { payload } = yield take(SocketTypes.ACCOUNT_ONLINE);
    socket.emit('room.accounts', payload);
  }
}

// Start
export function* start() {
  const socket = yield call(connect);

  if (socket) {
    yield fork(read, socket, 'online');
    yield fork(handleOnline, socket);
  }
}
