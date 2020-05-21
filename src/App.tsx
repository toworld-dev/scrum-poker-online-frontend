import React from 'react';
import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// import GlobalStyle from './styles/global'; // remove because bug -> https://github.com/styled-components/styled-components/issues/2911#issuecomment-592012166

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
    </BrowserRouter>
  );
};

export default App;
