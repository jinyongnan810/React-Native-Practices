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
      date: new Date(),
    },
    {
      id: "2",
      title: "Gas",
      amount: 50,
      date: new Date(),
    },
  ],
};
export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (
      state,
      action: PayloadAction<{ title: string; amount: number }>
    ) => {
      state.expenses.push({
        ...action.payload,
        id: Math.random().toString(),
        date: new Date(),
      });
    },
    removeExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    updateExpense: (
      state,
      action: PayloadAction<{ id: string; title: string; amount: number }>
    ) => {
      const expenseIndex = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      if (expenseIndex !== -1) {
        state.expenses[expenseIndex].title = action.payload.title;
        state.expenses[expenseIndex].amount = action.payload.amount;
      }
    },
  },
});

export const { addExpense, removeExpense, updateExpense } =
  expensesSlice.actions;
