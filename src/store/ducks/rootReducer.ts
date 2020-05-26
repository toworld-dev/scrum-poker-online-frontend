import { combineReducers } from 'redux';

import auth from './auth';
import account from './account';
import room from './room';
import modal from './modal';
import vote from './vote';
import theme from './theme';

export default combineReducers({
  auth,
  account,
  room,
  modal,
  vote,
  theme,
});
