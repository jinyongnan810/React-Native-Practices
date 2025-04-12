import { REST_URL } from "@env";
import axios from "axios";
import { Expense } from "../models/expense";

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
  }
  return [];
};

export const deleteExpenseApi = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${REST_URL}/expenses/${id}.json`);
  } catch (error) {
    console.error(error);
  }
};
