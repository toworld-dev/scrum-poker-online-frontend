import { Reducer } from 'redux';
import { ModalState, ModalTypes } from './types';
import { AuthTypes } from '../auth/types';

const INITIAL_STATE: ModalState = {
  status: false,
};

const reducer: Reducer<ModalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalTypes.SET:
      return {
        status: action.payload,
      };
    case AuthTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
