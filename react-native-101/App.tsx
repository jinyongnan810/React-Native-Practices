import { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import GoalInputArea from "./components/GoalInputArea";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <GoalInputArea
        onAddGoal={(goal) => setGoals((current) => [...current, goal])}
      />
      <View style={styles.goalList}>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          renderItem={(goal) => <GoalItem goal={goal.item} />}
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
  goalList: {
    // flex: 7,
    paddingBottom: 100,
  },
});
