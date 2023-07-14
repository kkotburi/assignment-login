import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const commenstSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    rGetComments: (state, action) => {
      return action.payload;
    },
    rAddComment: (state, action) => {
      return [...state, action.payload];
    },
    rDeleteComment: (state, action) => {
      return state.filter((comment) => comment.id !== action.payload);
    }
  }
});

export const { rGetComments, rAddComment, rDeleteComment } = commenstSlice.actions;
export default commenstSlice.reducer;
