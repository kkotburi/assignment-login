import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    rGetPosts: (state, action) => {
      return action.payload;
    },
    rAddPost: (state, action) => {
      return [...state, action.payload];
    },
    rDeletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    rUpdatePost: (state, action) => {
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, text: action.payload.text };
        } else {
          return post;
        }
      });
    }
  }
});

export const { rGetPosts, rAddPost, rDeletePost, rUpdatePost } = postsSlice.actions;
export default postsSlice.reducer;
