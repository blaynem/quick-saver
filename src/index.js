import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'

import configureStore from './configureStore'
let { store, persistor } = configureStore()

import MainApp from './MainApp';

// will remove all persisted data from reducers on refresh
persistor.purge()

const Main = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainApp />
    </PersistGate>
  </Provider> 
)

export default Main