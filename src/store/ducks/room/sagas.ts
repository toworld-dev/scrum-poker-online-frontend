import { call, fork, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import { Socket } from 'socket.io';

import { store } from '../..';

function connect() {
  const {
    auth: { data },
  } = store.getState();

  if (data?.token) {
    const socket = io('http://localhost:3000/room', {
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
    socket.on('reconnect', () => {
      console.log('Room reconnect');
    });

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
// export function* write(socket: Socket) {
//   while (true) {
//     const { payload } = yield take(RoomTypes.ROOM);
//     socket.emit('room.accounts', payload);
//   }
// }

// Start
export function* start() {
  const socket = yield call(connect);

  if (socket) {
    yield fork(read, socket);
    // yield fork(write, socket);
  }
}
