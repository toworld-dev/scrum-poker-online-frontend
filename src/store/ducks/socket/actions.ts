import { action } from 'typesafe-actions';
import { SocketTypes } from './types';

export const listenOnline = (data: string[]) =>
  action(SocketTypes.ACCOUNTS, data);

export const sendOnline = (user: string) =>
  action(SocketTypes.ACCOUNT_ONLINE, user);
