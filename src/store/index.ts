import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { AuthState } from './ducks/auth/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { SocketState } from './ducks/socket/types';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export interface ApplicationState {
  auth: AuthState;
  socket: SocketState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
