import React from 'react';
import { StatusBar } from 'react-native';
// Provider => dá acesso aos componentes do redux
import { Provider } from 'react-redux';
import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#191920" />
        <Routes />
      </Provider>
    </>
  );
}
