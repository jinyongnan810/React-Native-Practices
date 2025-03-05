import React from "react";
import { Text } from "react-native";

type Props = {
  num: number;
};

const GameScreen = ({ num }: Props) => {
  return <Text>Game Screen: {num}</Text>;
};

export default GameScreen;
