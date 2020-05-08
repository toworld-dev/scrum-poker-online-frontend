import { call, fork, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import { accounts } from './actions';
import { SocketTypes } from './types';

function connect() {
  const socket = io('http://localhost:3015/', {
    query: {
      token: 'token',
    },
  });
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
      console.log('connected');
    });
  });
}

function subscribe(socket: any) {
  return eventChannel((emit: any) => {
    socket.on('online', (data: any) => {
      console.log('online', data);
      emit(accounts(data));
    });
    // socket.on('disconnect', e => {
    //   // TODO: handle
    // });
    //
    return () => {};
  });
}

function* read(socket: any) {
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* write(socket: any) {
  while (true) {
    const { payload } = yield take(SocketTypes.ACCOUNTS_ONLINE);
    console.log('emmit accounts', payload);
    socket.emit('online', payload);
  }
}

export function* start() {
  const socket = yield call(connect);
  yield fork(read, socket);
  yield fork(write, socket);
}
