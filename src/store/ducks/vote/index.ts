import { Reducer } from 'redux';
import { VoteState, VoteTypes, Vote } from './types';
import { AuthTypes } from '../auth/types';

const INITIAL_STATE: VoteState = {
  data: {} as Vote,
  error: false,
  mostVoted: [],
  loading: false,
};

const reducer: Reducer<VoteState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VoteTypes.SET_RESULT:
      return {
        ...state,
        mostVoted: action.payload,
      };
    case VoteTypes.VOTES:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case VoteTypes.VOTE:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case AuthTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
