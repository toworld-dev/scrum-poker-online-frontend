import { Reducer } from 'redux';
import { AuthState, AuthTypes, Auth } from './types';

const INITIAL_STATE: AuthState = {
  data: {} as Auth,
  error: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
    case AuthTypes.SIGN_UP_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case AuthTypes.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {} as Auth,
      };
    default:
      return state;
  }
};

export default reducer;
