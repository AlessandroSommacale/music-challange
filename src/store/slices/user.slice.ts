import { UserState } from '../api/identityApi';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userStore = createSlice({
  name: 'user',
  initialState: {} as UserState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      window.localStorage.setItem('userData', JSON.stringify(action.payload));
      return action.payload;
    },
    resetUser() {
      window.localStorage.removeItem('userData');
      return {} as UserState;
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase(() => {
      const userDataFromStorage = typeof window !== 'undefined' && window.localStorage.getItem('userData');
      const parsedUserDataFromStorageFromStorage = userDataFromStorage && JSON.parse(userDataFromStorage);
      return parsedUserDataFromStorageFromStorage || {};
    });
  },
});

export const { setUser, resetUser } = userStore.actions;
