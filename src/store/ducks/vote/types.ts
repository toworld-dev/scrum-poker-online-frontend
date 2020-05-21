import { Account } from '../account/types';

/**
 * Action types
 */
export enum VoteTypes {
  VOTES = '@Vote/VOTES',
  VOTE = '@Vote/VOTE',
  SET_RESULT = '@Vote/SET_RESULT',
  SHOW_RESULT = '@Vote/SHOW_RESULT',
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
  readonly mostVoted: number[];
  readonly error: boolean;
  readonly loading: boolean;
}
