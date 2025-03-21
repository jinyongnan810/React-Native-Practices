import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constants";
type Props = {
  recent: boolean;
  total: number;
};
const ExpenseSummary = ({ recent, total }: Props) => {
  return (
    <Text style={styles.container}>
      You have spent ${total.toFixed(2)}{" "}
      {recent ? "in recent week" : "in history"}.
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "auto",
    marginTop: 16,
    marginBottom: 8,
    marginHorizontal: 16,
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
    color: Colors.primary,
    fontSize: 18,
  },
});

export default ExpenseSummary;
