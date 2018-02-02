import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(thunk),
    )
  )
  let persistor = persistStore(store)
  return { store, persistor }
}