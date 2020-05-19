import { combineReducers } from 'redux';

import auth from './auth';
import account from './account';
import room from './room';
import modal from './modal';
import vote from './vote';

export default combineReducers({
  auth,
  account,
  room,
  modal,
  vote,
});
