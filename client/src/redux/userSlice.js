import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    auth: false, // Track if the user is authenticated
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.email;
      state.auth = true; // Set auth to true on login
    },
    logout: (state) => {
      state.user = null;
      state.auth = false; // Reset auth on logout
    },
  },
});

// Export the actions
export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user; // Selector for user info
export const selectAuth = (state) => state.user.auth; // Selector for auth status

export default userSlice.reducer;
