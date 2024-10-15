import { configureStore } from '@reduxjs/toolkit';
import userReducers from './slices/user.js'

const store = configureStore({
  reducer: {
    user: userReducers
  },
});

export default store;
