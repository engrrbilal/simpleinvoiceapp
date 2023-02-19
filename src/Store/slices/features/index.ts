import { combineReducers } from 'redux';
import { authFeatureReducer } from './auth';
import { invoicesFeatureReducer } from './invoices';
import { themeFeatureReducer } from './theme';

const featuresReducer = combineReducers({
  auth: authFeatureReducer,
  invoices: invoicesFeatureReducer,
  theme: themeFeatureReducer,
});

export { featuresReducer };

export * from './auth';
export * from './invoices';
export * from './theme';
