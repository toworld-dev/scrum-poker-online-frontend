import { Reducer } from 'redux';
import { SocketState, SocketTypes } from './types';

const INITIAL_STATE: SocketState = {
  accounts: [],
  // vote: false,
  // room: false,
};

const reducer: Reducer<SocketState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SocketTypes.ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
