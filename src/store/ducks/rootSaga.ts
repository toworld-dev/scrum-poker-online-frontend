import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { signInRequest, signUpRequest } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signInRequest),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUpRequest),
  ]);
}
