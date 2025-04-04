import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Color";
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
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  text: {
    color: "white",
    fontFamily: "DarumadropOne",
  },
});

export default GuessHistoryItem;
