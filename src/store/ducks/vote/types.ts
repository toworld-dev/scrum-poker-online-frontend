import { Account } from '../account/types';

/**
 * Action types
 */
export enum VoteTypes {
  VOTES = '@Vote/VOTES',
  VOTE = '@Vote/VOTE',
}

/**
 * Data types
 */
export interface Vote {
  [voto: number]: Account[];
}

/**
 * State type
 */
export interface VoteState {
  readonly data: Vote;
  readonly error: boolean;
  readonly loading: boolean;
}
