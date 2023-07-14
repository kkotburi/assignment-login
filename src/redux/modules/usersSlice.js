import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    email: '123@123.com',
    password: '123123',
    isSignIn: false
  },
  {
    id: 2,
    email: '234@234.com',
    password: '234234',
    isSignIn: false
  }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signIn: (state, action) => {
      return state.map((user) => {
        if (user.email === action.payload.email && user.password === action.payload.password && !user.isSignIn) {
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

export const { signIn, signUp, signOut } = usersSlice.actions;
export default usersSlice.reducer;
