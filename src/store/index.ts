/* eslint-disable no-console */
import { createStore, applyMiddleware, Store, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { AuthState } from './ducks/auth/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { AccountState } from './ducks/account/types';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const middlewares = [];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export interface ApplicationState {
  auth: AuthState;
  account: AccountState;
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
