import { Reducer } from 'redux';
import { RoomState, RoomTypes, Room } from './types';

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
