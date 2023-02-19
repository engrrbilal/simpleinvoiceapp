import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootSaga from './sagas';
import rootReducer from './slices';
import { BUILD_ENV } from '@/Constants/Config';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
  })
  .concat(middlewares),
  devTools: process.env.REACT_APP_ENV !== BUILD_ENV.PRODUCTION,
});

sagaMiddleware.run(rootSaga);

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default () => {
  const persistor = persistStore(store);
  return { store, persistor };
};
