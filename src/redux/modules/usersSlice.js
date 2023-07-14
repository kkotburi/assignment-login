import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    rGetUsers: (state, action) => {
      return action.payload;
    },
    signIn: (state, action) => {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, isSignIn: true };
        } else {
          return user;
        }
      });
    },
    signUp: (state, action) => {
      return [...state, action.payload];
    },
    signOut: (state, action) => {
      return state.map((user) => {
        if (user.id === action.payload && user.isSignIn) {
          return { ...user, isSignIn: false };
        } else {
          return user;
        }
      });
    }
  }
});

export const { rGetUsers, signIn, signUp, signOut } = usersSlice.actions;
export default usersSlice.reducer;
