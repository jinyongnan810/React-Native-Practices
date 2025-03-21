import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ExpenseItem from "../components/ExpenseItem";
import ExpenseSummary from "../components/ExpenseSummary";
import { getRecentExpenses, sortExpenses } from "../helper/FilterHelper";
import { RootState } from "../store/store";

const RecentExpensesScreen = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const recent = getRecentExpenses(expenses);
  const total = recent.reduce((acc, cur) => acc + cur.amount, 0);

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
