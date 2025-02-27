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

export default function App() {
  const [goalInputText, setGoalInputText] = useState("");
  const [goals, setGoals] = useState<string[]>([]);
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
            setGoals((current) => [...current, goalInputText]);
            // setGoalInputText("");
          }}
        />
      </View>
      <View style={styles.goalList}>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          renderItem={(goal) => (
            <Text style={styles.goalItem} key={goal.index}>
              {goal.item}
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
