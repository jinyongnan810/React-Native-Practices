import React from "react";
import { StyleSheet, Text, View } from "react-native";
type Props = {
  index: number;
  guess: number;
};
const GuessHistoryItem = ({ index, guess }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{index + 1}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#11287b",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  text: {
    color: "white",
  },
});

export default GuessHistoryItem;
