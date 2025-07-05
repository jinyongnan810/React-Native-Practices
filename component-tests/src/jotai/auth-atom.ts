import { atom } from "jotai";
type AuthState = {
  isAuthenticated: boolean;
};

export const authAtom = atom<AuthState>({ isAuthenticated: false });
