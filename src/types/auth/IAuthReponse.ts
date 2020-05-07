export interface ISignInResponse {
  id: string;
  roomName: string;
  token: string;
  type: 'default' | 'admin';
}

export interface ISignUpResponse {
  token: string;
  type: 'default' | 'admin';
}
