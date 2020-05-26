import { Reducer } from 'redux';
import { ThemeTypes, ThemeState } from './types';
import { light, dark } from '../../../styles/theme';

const INITIAL_STATE: ThemeState = light;

const reducer: Reducer<ThemeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeTypes.SET:
      return action.payload.theme === 'dark' ? dark : light;
    default:
      return state;
  }
};

export default reducer;
