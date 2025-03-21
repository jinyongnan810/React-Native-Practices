import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ExpenseItem from "../components/ExpenseItem";
import ExpenseSummary from "../components/ExpenseSummary";
import { sortExpenses } from "../helper/FilterHelper";
import { RootState } from "../store/store";

const AllExpensesScreen = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const total = expenses.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <View style={styles.container}>
      <ExpenseSummary recent={false} total={total} />
      <FlatList
        style={styles.list}
        data={sortExpenses(expenses)}
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

export default AllExpensesScreen;
