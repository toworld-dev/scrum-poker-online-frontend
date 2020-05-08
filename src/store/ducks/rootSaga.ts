import { all, takeLatest, fork } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { signInRequest, signUpRequest } from './auth/sagas';

import { start } from './socket/sagas';

export default function* rootSaga() {
  yield fork(start);
  yield all([
    // Auth
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signInRequest),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUpRequest),
  ]);
}
