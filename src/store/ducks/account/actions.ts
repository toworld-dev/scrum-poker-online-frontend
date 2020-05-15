import { action } from 'typesafe-actions';
import { AccountTypes, Account } from './types';

export const listenOnline = (data: Account[]) =>
  action(AccountTypes.ONLINE, data);
