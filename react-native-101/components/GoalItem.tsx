import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  goal: Goal;
  onPress: (id: String) => void;
};

const GoalItem = ({ goal, onPress }: Props) => {
  return (
    <Pressable
      onPress={() => onPress(goal.id)}
      android_ripple={{ color: "#f0f0f0" }}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.6 : 1,
        },
      ]}
    >
      <Text style={styles.goalItem} key={goal.id}>
        {goal.text}
      </Text>
    </Pressable>
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
