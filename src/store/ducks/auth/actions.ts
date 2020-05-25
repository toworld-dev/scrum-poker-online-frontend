import { action } from 'typesafe-actions';
import { AuthTypes, Auth } from './types';
import {
  ISignInRequest,
  ISignUpRequest,
} from '../../../types/auth/IAuthRequest';

export const logout = () => action(AuthTypes.LOGOUT);

export const signInRequest = (formRequest: ISignInRequest) =>
  action(AuthTypes.SIGN_IN_REQUEST, formRequest);

export const signUpRequest = (formRequest: ISignUpRequest) =>
  action(AuthTypes.SIGN_UP_REQUEST, formRequest);

export const authSuccess = (data: Auth) => action(AuthTypes.SUCCCES, { data });

export const authFailure = (error?: any) =>
  action(AuthTypes.FAILURE, { error });
