import React from 'react';
import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
          <ToastContainer autoClose={2000} />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
