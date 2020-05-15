import { Reducer } from 'redux';
import { ModalState, ModalTypes } from './types';

const INITIAL_STATE: ModalState = {
  status: false,
};

const reducer: Reducer<ModalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalTypes.SET:
      return {
        status: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
