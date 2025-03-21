export const getRecentExpenses = (expenses: Expense[]) => {
  const now = Date.now();
  return expenses.filter((expense) => {
    return now - expense.date <= 7 * 24 * 60 * 60 * 1000;
  });
};

export const sortExpenses = (expenses: Expense[]) => {
  return [...expenses].sort((a, b) => b.date - a.date);
};
