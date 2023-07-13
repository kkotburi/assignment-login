import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: 'This is post test <3' },
  { id: 2, text: 'for detail page test &>>' }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      return [...state, action.payload];
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
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

export const { addPost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;
