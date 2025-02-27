import { useState } from "react";
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

class Goal {
  id: string;
  text: string;
  constructor(id: string, text: string) {
    this.id = id;
    this.text = text;
  }
}

export default function App() {
  const [goalInputText, setGoalInputText] = useState("");
  const [goals, setGoals] = useState<Goal[]>([]);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.enterGoalArea}>
        <TextInput
          style={styles.goalInput}
          placeholder="Enter your goal!"
          value={goalInputText}
          autoCorrect={false}
          autoComplete="off"
          onChangeText={(e) => {
            setGoalInputText(e);
          }}
        />
        <Button
          title="Add"
          onPress={() => {
            if (goalInputText === "") {
              return;
            }
            const newGoal = new Goal(Math.random().toString(), goalInputText);
            setGoals((current) => [...current, newGoal]);
            // setGoalInputText("");
          }}
        />
      </View>
      <View style={styles.goalList}>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          renderItem={(goal) => (
            <Text style={styles.goalItem} key={goal.item.id}>
              {goal.item.text}
            </Text>
          )}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  enterGoalArea: {
    // flex: 1,
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
  goalList: {
    // flex: 7,
    paddingBottom: 100,
  },
  goalItem: {
    fontSize: 16,
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
});
