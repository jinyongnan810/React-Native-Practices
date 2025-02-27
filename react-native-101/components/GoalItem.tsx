import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  goal: Goal;
};

const GoalItem = ({ goal }: Props) => {
  return (
    <Text style={styles.goalItem} key={goal.id}>
      {goal.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    fontSize: 16,
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
});

export default GoalItem;
