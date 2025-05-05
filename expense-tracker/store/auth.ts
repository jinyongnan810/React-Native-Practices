import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { refreshTokenApi } from "../helper/HttpHelper";
import { Auth } from "../models/auth";

interface AuthState {
  authState?: Auth;
}

const initialState: AuthState = {
  authState: undefined,
};

export const restoreAuth = createAsyncThunk("auth/restoreAuth", async () => {
  const authState = await AsyncStorage.getItem("authState");
  if (authState) {
    const parsedAuthState = JSON.parse(authState);
    // Refresh the token if it is expired
    const now = Date.now();
    if (parsedAuthState.expirationDate <= now) {
      const newAuth = await refreshTokenApi(parsedAuthState.refreshToken);
      if (!newAuth) {
        return null;
      }
      return newAuth as Auth;
    }
    return parsedAuthState as Auth;
  }
  return null;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onAuthenticated: (state, action: PayloadAction<Auth>) => {
      state.authState = action.payload;
      AsyncStorage.setItem("authState", JSON.stringify(action.payload));
    },
    onSignout: (state) => {
      state.authState = undefined;
      AsyncStorage.removeItem("authState");
    },
    onRefreshToken: (state, action: PayloadAction<Auth>) => {
      state.authState = action.payload;
      AsyncStorage.setItem("authState", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      restoreAuth.fulfilled,
      (state, action: PayloadAction<Auth | null>) => {
        console.log("Restoring auth state", action.payload);
        if (action.payload === null) {
          state.authState = undefined;
          return;
        }
        state.authState = action.payload;
      }
    );
  },
});

export const { onAuthenticated, onSignout, onRefreshToken } = authSlice.actions;
