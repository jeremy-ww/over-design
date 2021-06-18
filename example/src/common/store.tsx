/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { configureStore, Middleware } from '@reduxjs/toolkit';

import helloWorldSlice from 'src/pages/hello-world/slice';

const middlewares: Middleware[] = [];

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
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
