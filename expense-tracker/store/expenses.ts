import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ExpensesState {
  expenses: Expense[];
}
const initialState: ExpensesState = {
  expenses: [
    {
      id: "1",
      title: "Groceries",
      amount: 100,
      date: Date.now(),
    },
    {
      id: "2",
      title: "Gas",
      amount: 50,
      date: Date.now() - 8 * 24 * 60 * 60 * 1000,
    },
    {
      id: "3",
      title: "Electricity Bill",
      amount: 120,
      date: Date.now() - 15 * 24 * 60 * 60 * 1000,
    },
    {
      id: "4",
      title: "Internet",
      amount: 60,
      date: Date.now() - 20 * 24 * 60 * 60 * 1000,
    },
    {
      id: "5",
      title: "Dining Out",
      amount: 80,
      date: Date.now() - 5 * 24 * 60 * 60 * 1000,
    },
    {
      id: "6",
      title: "Gym Membership",
      amount: 40,
      date: Date.now() - 30 * 24 * 60 * 60 * 1000,
    },
    {
      id: "7",
      title: "Car Maintenance",
      amount: 200,
      date: Date.now() - 45 * 24 * 60 * 60 * 1000,
    },
    {
      id: "8",
      title: "Coffee",
      amount: 15,
      date: Date.now() - 1 * 24 * 60 * 60 * 1000,
    },
    {
      id: "9",
      title: "Books",
      amount: 90,
      date: Date.now() - 10 * 24 * 60 * 60 * 1000,
    },
    {
      id: "10",
      title: "Clothing",
      amount: 150,
      date: Date.now() - 25 * 24 * 60 * 60 * 1000,
    },
    {
      id: "11",
      title: "Movie Tickets",
      amount: 30,
      date: Date.now() - 3 * 24 * 60 * 60 * 1000,
    },
    {
      id: "12",
      title: "Subscription Service",
      amount: 12,
      date: Date.now() - 7 * 24 * 60 * 60 * 1000,
    },
  ],
};
export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (
      state,
      action: PayloadAction<{ title: string; amount: number; date: number }>
    ) => {
      state.expenses.push({
        ...action.payload,
        id: Math.random().toString(),
      });
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
});

export const { addExpense, removeExpense, updateExpense } =
  expensesSlice.actions;
