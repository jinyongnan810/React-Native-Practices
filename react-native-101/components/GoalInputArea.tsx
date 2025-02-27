import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

type Props = {
  visible: boolean;
  onAddGoal: (goal: Goal) => void;
  onCloseSheet: () => void;
};

const GoalInputArea = ({ visible, onAddGoal, onCloseSheet }: Props) => {
  const [text, setText] = useState("");
  return (
    <Modal style={{ height: 300 }} visible={visible} animationType="slide">
      <View style={styles.enterGoalArea}>
        <TextInput
          style={styles.goalInput}
          placeholder="Enter your goal!"
          value={text}
          autoCorrect={false}
          autoComplete="off"
          onChangeText={setText}
        />
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Cancel"
            onPress={() => {
              onCloseSheet();
            }}
            color="red"
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
              onCloseSheet();
              // setGoalInputText("");
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  enterGoalArea: {
    flex: 1,
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
