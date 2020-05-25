/* eslint-disable no-case-declarations */
import { Reducer } from 'redux';
import { AccountState, AccountTypes, Account } from './types';
import { AuthTypes } from '../auth/types';
import { VoteTypes, Vote } from '../vote/types';

const INITIAL_STATE: AccountState = {
  data: [],
  userVoted: [],
  error: false,
  loading: false,
};

const reducer: Reducer<AccountState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VoteTypes.VOTES:
      const votes: Vote = action.payload;
      const userVoted: Account[] = [];

      Object.keys(votes).forEach((key: any) => {
        userVoted.push(...votes[key]);
      });

      return {
        ...state,
        userVoted,
      };
    case AccountTypes.ONLINE:
      return {
        ...state,
        data: action.payload,
      };
    case AuthTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
