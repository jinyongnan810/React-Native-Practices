import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import GoalInputArea from "./components/GoalInputArea";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [addSheetVisible, setAddSheetVisible] = useState(false);
  return (
    <>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Image
          style={{
            height: 200,
            width: "100%",
            objectFit: "cover",
            borderRadius: 4,
          }}
          source={require("./assets/images/goal.webp")}
        />
        <Button
          title="Add New Goal"
          onPress={() => {
            setAddSheetVisible(true);
          }}
        />
        <GoalInputArea
          visible={addSheetVisible}
          onAddGoal={(goal) => setGoals((current) => [...current, goal])}
          onCloseSheet={() => setAddSheetVisible(false)}
        />
        <View style={styles.goalList}>
          <FlatList
            alwaysBounceVertical={false}
            data={goals}
            renderItem={(goal) => (
              <GoalItem
                goal={goal.item}
                onPress={(id) =>
                  setGoals((current) => current.filter((e) => e.id != id))
                }
              />
            )}
          />
        </View>
      </KeyboardAvoidingView>
    </>
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
