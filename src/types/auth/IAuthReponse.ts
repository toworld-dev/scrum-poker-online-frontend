export interface ISignInResponse {
  id: string;
  username: string;
  roomName: string;
  token: string;
  type: 'default' | 'admin';
}

export interface ISignUpResponse {
  token: string;
  type: 'default' | 'admin';
}
