import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getExpensesApi } from "../helper/HttpHelper";
import { Expense } from "../models/expense";

interface ExpensesState {
  expenses: Expense[];
}

const initialState: ExpensesState = {
  expenses: [],
};

// Async thunk to fetch expenses from an API
export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async () => {
    const data = await getExpensesApi();
    return data;
  }
);

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    updateExpense: (
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        amount: number;
        date: number;
      }>
    ) => {
      const expenseIndex = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      if (expenseIndex !== -1) {
        state.expenses[expenseIndex].title = action.payload.title;
        state.expenses[expenseIndex].amount = action.payload.amount;
        state.expenses[expenseIndex].date = action.payload.date;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchExpenses.fulfilled,
      (state, action: PayloadAction<Expense[]>) => {
        state.expenses = action.payload;
      }
    );
  },
});

export const { addExpense, removeExpense, updateExpense } =
  expensesSlice.actions;
