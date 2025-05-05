import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "../models/auth";

interface AuthState {
  authState?: Auth;
}

const initialState: AuthState = {
  authState: undefined,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onAuthenticated: (state, action: PayloadAction<Auth>) => {
      state.authState = action.payload;
    },
    onSignout: (state) => {
      state.authState = undefined;
    },
  },
});

export const { onAuthenticated, onSignout } = authSlice.actions;
