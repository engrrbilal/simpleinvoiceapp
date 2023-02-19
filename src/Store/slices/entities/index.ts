import { combineReducers } from 'redux';
import { invoicesEntityReducer } from './invoices';

const entitiesReducer = combineReducers({
  invoices: invoicesEntityReducer,
});

export { entitiesReducer };

export * from './invoices';
