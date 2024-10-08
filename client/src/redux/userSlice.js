import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    auth: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.email;
      state.auth = true;
    },
    logout: (state) => {
      state.user = null;
      state.auth = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectAuth = (state) => state.user.auth;

export default userSlice.reducer;
