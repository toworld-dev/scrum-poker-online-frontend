import { combineReducers } from 'redux';

import auth from './auth';
import socket from './socket';

export default combineReducers({
  auth,
  socket,
});
