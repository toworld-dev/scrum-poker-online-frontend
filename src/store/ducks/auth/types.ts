/**
 * Action types
 */
export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_UP_REQUEST = '@auth/SIGN_UP_REQUEST',
  SUCCCES = '@auth/SUCCCES',
  FAILURE = '@auth/FAILURE',
  SOCKET_ID = '@auth/SOCKET_ID',
}

/**
 * Data types
 */
export interface Auth {
  username: string;
  user: string;
  token: string;
  type: string;
  roomId: string;
  clientId?: string;
}

/**
 * State type
 */
export interface AuthState {
  readonly data: Auth;
  readonly loading: boolean;
  readonly error: boolean;
}