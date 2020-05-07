import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
