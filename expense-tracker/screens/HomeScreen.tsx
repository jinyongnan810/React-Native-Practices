import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ExpenseItem from "../components/ExpenseItem";
import { RootState } from "../store/store";

const HomeScreen = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExpenseItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
