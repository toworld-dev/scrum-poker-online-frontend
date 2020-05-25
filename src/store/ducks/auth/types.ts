/**
 * Action types
 */
export enum AuthTypes {
  LOGOUT = '@auth/LOGOUT',
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_UP_REQUEST = '@auth/SIGN_UP_REQUEST',
  SUCCCES = '@auth/SUCCCES',
  FAILURE = '@auth/FAILURE',
}

/**
 * Data types
 */
export interface Auth {
  username: string;
  user: string;
  token: string;
  type: 'admin' | 'default';
  roomId: string;
  clientId?: string;
}

/**
 * State type
 */
export interface AuthState {
  readonly data: Auth;
  readonly loading: boolean;
  readonly error: string | boolean;
}
