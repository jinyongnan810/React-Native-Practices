import { API_KEY, REST_URL } from "@env";
import axios from "axios";
import { Auth } from "../models/auth";
import { Expense } from "../models/expense";
import { showPopup } from "./PopupHelper";

export const addExpenseApi = async (
  body: {
    title: string;
    amount: number;
    date: number;
  },
  token: string
): Promise<Expense | undefined> => {
  try {
    const response = await axios.post(
      `${REST_URL}/expenses.json?auth=${token}`,
      body
    );
    const id = response.data.name;
    return {
      id,
      ...body,
    };
  } catch (error) {
    console.error(error);
    showPopup("Error", "Failed to add expense. Please try again.");
  }
};

export const updateExpenseApi = async (
  id: string,
  body: {
    title: string;
    amount: number;
    date: number;
  },
  token: string
): Promise<Expense | undefined> => {
  try {
    await axios.patch(`${REST_URL}/expenses/${id}.json?auth=${token}`, body);
    return {
      id,
      ...body,
    };
  } catch (error) {
    console.error(error);
    showPopup("Error", "Failed to update expense. Please try again.");
  }
};

export const getExpensesApi = async (token: string): Promise<Expense[]> => {
  try {
    const response = await axios.get(`${REST_URL}/expenses.json?auth=${token}`);
    const expenses: Expense[] = [];
    for (const key in response.data) {
      expenses.push({
        id: key,
        ...response.data[key],
      });
    }
    return expenses;
  } catch (error) {
    console.error(error);
    showPopup("Error", "Failed to fetch expenses. Please try again.");
  }
  return [];
};

export const deleteExpenseApi = async (
  id: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${REST_URL}/expenses/${id}.json?auth=${token}`);
  } catch (error) {
    console.error(error);
    showPopup("Error", "Failed to delete expense. Please try again.");
  }
};

export const signupApi = async (
  email: string,
  password: string
): Promise<Auth | undefined> => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
    console.log(JSON.stringify(response.data));
    const {
      idToken: token,
      email: userEmail,
      localId: id,
      refreshToken,
      expiresIn,
    } = response.data;
    const expirationDate = Date.now() + parseInt(expiresIn) * 1000;
    const auth: Auth = {
      id: id,
      email: userEmail,
      token: token,
      expirationDate: expirationDate,
      refreshToken: refreshToken,
    };
    return auth;
  } catch (error) {
    console.error(error);
    showPopup("Error", "Failed to sign up. Please try again.");
  }
};

export const loginApi = async (
  email: string,
  password: string
): Promise<Auth | undefined> => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
    console.log(JSON.stringify(response.data));
    const {
      idToken: token,
      email: userEmail,
      localId: id,
      refreshToken,
      expiresIn,
    } = response.data;
    const expirationDate = Date.now() + parseInt(expiresIn) * 1000;
    const auth: Auth = {
      id: id,
      email: userEmail,
      token: token,
      expirationDate: expirationDate,
      refreshToken: refreshToken,
    };
    return auth;
  } catch (error) {
    console.error(error);
    showPopup("Error", "Failed to log in. Please try again.");
  }
};

export const refreshTokenApi = async (
  authStatus: Auth
): Promise<Auth | undefined> => {
  try {
    const response = await axios.post(
      `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
      {
        grant_type: "refresh_token",
        refresh_token: authStatus.refreshToken,
      }
    );
    console.log(JSON.stringify(response.data));
    const {
      id_token: token,
      expires_in: expiresIn,
      refresh_token: refreshToken,
    } = response.data;
    const expirationDate = Date.now() + parseInt(expiresIn) * 1000;
    const auth: Auth = {
      id: authStatus.id,
      email: authStatus.email,
      token: token,
      expirationDate: expirationDate,
      refreshToken: refreshToken,
    };
    return auth;
  } catch (error) {
    console.error(error);
    showPopup("Error", "Failed to refresh token. Please try again.");
  }
};
