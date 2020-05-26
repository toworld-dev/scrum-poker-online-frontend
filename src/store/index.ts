/* eslint-disable no-console */
import { createStore, applyMiddleware, Store, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { AuthState } from './ducks/auth/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { AccountState } from './ducks/account/types';
import { RoomState } from './ducks/room/types';
import { ModalState } from './ducks/modal/types';
import { VoteState } from './ducks/vote/types';
import { ThemeState } from './ducks/theme/types';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'theme'],
};

const middlewares = [];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export interface ApplicationState {
  modal: ModalState;
  auth: AuthState;
  account: AccountState;
  room: RoomState;
  vote: VoteState;
  theme: ThemeState;
}

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store: Store<ApplicationState> =
  process.env.NODE_ENV === 'development'
    ? createStore(
        persistedReducer,
        compose(applyMiddleware(...middlewares), console.tron.createEnhancer()),
      )
    : createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
