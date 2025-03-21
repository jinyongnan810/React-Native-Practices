import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { AddOrUpdateScreenNavigationProps } from "../App";
import Colors from "../constants";
type Props = {
  item: Expense;
};
const ExpenseItem = ({ item }: Props) => {
  const { id, title, amount, date } = item;
  const formattedDate = new Date(date).toISOString().split("T")[0];
  const navigation = useNavigation<AddOrUpdateScreenNavigationProps>();
  return (
    <Pressable
      onPress={() => navigation.navigate("AddOrUpdate", { id: id })}
      android_ripple={{ color: "#f0f0f0" }}
      style={({ pressed }) => [
        {
          opacity: Platform.OS == "ios" && pressed ? 0.6 : 1,
        },
        styles.container,
      ]}
    >
      <View style={styles.titleAndDate}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.amount}>{amount.toFixed(2)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: Colors.primary,
    marginVertical: 8,
    borderRadius: 8,
  },
  titleAndDate: {},
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#fff",
  },
  amount: {
    minWidth: 80,
    fontSize: 18,
    color: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ExpenseItem;
