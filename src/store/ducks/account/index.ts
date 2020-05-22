import { Reducer } from 'redux';
import { AccountState, AccountTypes } from './types';
import { AuthTypes } from '../auth/types';

const INITIAL_STATE: AccountState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<AccountState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
