import { fork } from 'redux-saga/effects';

import { start as startAccount } from '../account/sagas';
import { start as startRoom } from '../room/sagas';
import { start as startVote } from '../vote/sagas';

// Start
export function* start() {
  yield fork(startAccount);
  yield fork(startRoom);
  yield fork(startVote);
}
