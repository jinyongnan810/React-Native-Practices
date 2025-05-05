import { API_KEY, REST_URL } from "@env";
import axios from "axios";
import { Auth } from "../models/auth";
import { Expense } from "../models/expense";
import { showPopup } from "./PopupHelper";

export const addExpenseApi = async (body: {
  title: string;
  amount: number;
  date: number;
}): Promise<Expense | undefined> => {
  try {
    const response = await axios.post(`${REST_URL}/expenses.json`, body);
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
  }
): Promise<Expense | undefined> => {
  try {
    await axios.patch(`${REST_URL}/expenses/${id}.json`, body);
    return {
      id,
      ...body,
    };
  } catch (error) {
    console.error(error);
    showPopup("Error", "Failed to update expense. Please try again.");
  }
};

export const getExpensesApi = async (): Promise<Expense[]> => {
  try {
    const response = await axios.get(`${REST_URL}/expenses.json`);
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

export const deleteExpenseApi = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${REST_URL}/expenses/${id}.json`);
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

    const { idToken, email: userEmail, localId, expiresIn } = response.data;
    const expirationDate = Date.now() + parseInt(expiresIn) * 1000;
    const auth: Auth = {
      id: localId,
      email: userEmail,
      token: idToken,
      expirationDate: expirationDate,
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
    const { idToken, email: userEmail, localId, expiresIn } = response.data;
    const expirationDate = Date.now() + parseInt(expiresIn) * 1000;
    const auth: Auth = {
      id: localId,
      email: userEmail,
      token: idToken,
      expirationDate: expirationDate,
    };
    return auth;
  } catch (error) {
    console.error(error);
    showPopup("Error", "Failed to log in. Please try again.");
  }
};
