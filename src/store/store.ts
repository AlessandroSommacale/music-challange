import { albumsApi } from './api/albumsApi';
import { firebaseApi } from './api/firebaseApi';
import { identityApi } from './api/identityApi';
import { userStore } from './slices/user.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  [albumsApi.reducerPath]: albumsApi.reducer,
  [firebaseApi.reducerPath]: firebaseApi.reducer,
  [identityApi.reducerPath]: identityApi.reducer,
  [userStore.name]: userStore.reducer,
});

export const generateStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([albumsApi.middleware, firebaseApi.middleware, identityApi.middleware]),
  });

export type AppStore = ReturnType<typeof generateStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(generateStore, { debug: true });
