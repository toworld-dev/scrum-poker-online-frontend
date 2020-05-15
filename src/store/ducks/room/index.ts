import { Reducer } from 'redux';
import { RoomState, RoomTypes } from './types';

const INITIAL_STATE: RoomState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<RoomState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RoomTypes.REQUEST_GET:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
