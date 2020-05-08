import { action } from 'typesafe-actions';
import { SocketTypes } from './types';

export const accounts = (data: string[]) => action(SocketTypes.ACCOUNTS, data);
export const accountsOnline = (user: string) =>
  action(SocketTypes.ACCOUNTS_ONLINE, user);
