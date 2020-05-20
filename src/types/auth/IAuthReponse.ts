export interface ISignInResponse {
  clientId: string;
  username: string;
  token: string;
  type: 'default' | 'admin';
}

export interface ISignUpResponse {
  id: string;
  clientId: string;
  username: string;
  roomName: string;
  token: string;
  type: 'default' | 'admin';
}
