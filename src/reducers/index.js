import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import userSettingsReducer from './userSettingsReducer'

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  userSettings: userSettingsReducer
});

export default rootReducer;