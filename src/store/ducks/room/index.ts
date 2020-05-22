import { Reducer } from 'redux';
import { RoomState, RoomTypes, Room } from './types';
import { AuthTypes } from '../auth/types';

const INITIAL_STATE: RoomState = {
  data: {} as Room,
  error: false,
  loading: false,
};

const reducer: Reducer<RoomState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RoomTypes.TOPIC:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case AuthTypes.LOGOUT:
      return INITIAL_STATE;
    case RoomTypes.CREATE:
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
