import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

type Props = {
  onAddGoal: (goal: Goal) => void;
};

const GoalInputArea = ({ onAddGoal }: Props) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.enterGoalArea}>
      <TextInput
        style={styles.goalInput}
        placeholder="Enter your goal!"
        value={text}
        autoCorrect={false}
        autoComplete="off"
        onChangeText={setText}
      />
      <Button
        title="Add"
        onPress={() => {
          if (text === "") {
            return;
          }
          const newGoal: Goal = {
            id: Math.random().toString(),
            text: text,
          };
          onAddGoal(newGoal);
          // setGoalInputText("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  enterGoalArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  goalInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    width: "80%",
    fontSize: 20,
    marginRight: 12,
  },
});

export default GoalInputArea;
