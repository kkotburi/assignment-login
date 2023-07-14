import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../modules/usersSlice';
import postsSlice from '../modules/postsSlice';
import commentsSlice from '../modules/commentsSlice';

const store = configureStore({
  reducer: {
    usersSlice,
    postsSlice,
    commentsSlice
  }
});

export default store;
