import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { IActionSaga } from '../../../types/saga';
import { authSuccess, authFailure } from './actions';
import {
  ISignInRequest,
  ISignUpRequest,
} from '../../../types/auth/IAuthRequest';
import { Auth } from './types';

export function prepareResponse(data: any) {
  return {
    clientId: data.clientId,
    username: data.username,
    token: data.token,
    type: data.type,
    roomId: data.roomId || data.id,
  } as Auth;
}

export function* signInRequest(action: IActionSaga<ISignInRequest>) {
  try {
    const { payload } = action;
    const response = yield call(
      api.post,
      `/room/enter/${payload?.roomId}`,
      payload,
    );

    yield put(
      authSuccess(
        prepareResponse({
          ...response.data,
          ...payload,
        }),
      ),
    );
  } catch (err) {
    toast.error('Não foi possivel acessar');
    yield put(authFailure());
  }
}

export function* signUpRequest(action: IActionSaga<ISignUpRequest>) {
  try {
    const { payload } = action;
    const response = yield call(api.post, `/room`, payload);

    yield put(
      authSuccess(
        prepareResponse({
          ...response.data,
          ...payload,
        }),
      ),
    );
  } catch (err) {
    toast.error('Não foi possivel criar a sala');
    yield put(authFailure('Não foi possivel criar a sala'));
  }
}
