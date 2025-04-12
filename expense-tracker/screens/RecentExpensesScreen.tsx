import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ExpenseItem from "../components/ExpenseItem";
import ExpenseSummary from "../components/ExpenseSummary";
import { getRecentExpenses, sortExpenses } from "../helper/FilterHelper";
import { fetchExpenses } from "../store/expenses";
import { useAppDispatch } from "../store/hooks";
import { RootState } from "../store/store";

const RecentExpensesScreen = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const recent = getRecentExpenses(expenses);
  const total = recent.reduce((acc, cur) => acc + cur.amount, 0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ExpenseSummary recent={true} total={total} />
      <FlatList
        style={styles.list}
        data={sortExpenses(recent)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExpenseItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default RecentExpensesScreen;
