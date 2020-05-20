import { Reducer } from 'redux';
import { VoteState, VoteTypes, Vote } from './types';

const INITIAL_STATE: VoteState = {
  data: {} as Vote,
  mostVoted: undefined,
  error: false,
  loading: false,
};

const reducer: Reducer<VoteState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VoteTypes.VOTES:
      return {
        ...state,
        data: action.payload.votes,
        mostVoted: action.payload.mostVoted || undefined,
        loading: false,
      };
    case VoteTypes.VOTE:
      return {
        ...state,
        error: false,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
