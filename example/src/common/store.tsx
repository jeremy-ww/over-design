/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { configureStore, Middleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import helloWorldSlice, { helloWorldAPI } from 'src/pages/hello-world/slice';

const middlewares: Middleware[] = [helloWorldAPI.middleware];

/* istanbul ignore if */
if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    helloWorld: helloWorldSlice,
    [helloWorldAPI.reducerPath]: helloWorldAPI.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
