import { combineReducers } from 'redux';

import auth from './auth';
import account from './account';

export default combineReducers({
  auth,
  account,
});
