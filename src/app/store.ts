import { configureStore } from '@reduxjs/toolkit';
import { swapiApi } from '../features/swapi/swapiApi';

export const store = configureStore({
  reducer: {
    [swapiApi.reducerPath]: swapiApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(swapiApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
