import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  num: number;
};

const GameScreen = ({ num }: Props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Screen: {num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
