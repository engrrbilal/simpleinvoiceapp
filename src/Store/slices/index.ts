import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { entitiesReducer } from './entities';
import { featuresReducer } from './features';

const featurePersistConfig = {
  key: 'features',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['auth', 'theme'],
};

const entityPersistConfig = {
  key: 'entities',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  entities: persistReducer(entityPersistConfig, entitiesReducer),
  features: persistReducer(featurePersistConfig, featuresReducer),
});

const resettableRootReducer = (state: any, action: any) => {
  return rootReducer(state, action);
};

export default resettableRootReducer;
