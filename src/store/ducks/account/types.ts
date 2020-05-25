/**
 * Action types
 */
export enum AccountTypes {
  ONLINE = '@account/ONLINE',
}

/**
 * Data types
 */
export interface Account {
  clientId: string;
  username: string;
}

/**
 * State type
 */
export interface AccountState {
  readonly data: Account[];
  readonly userVoted: Account[];
  readonly error: boolean;
  readonly loading: boolean;
}
