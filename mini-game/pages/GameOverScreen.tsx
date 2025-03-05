import React from "react";
import { Text } from "react-native";

type Props = {
  onRestart: () => void;
};

const GameOverScreen = ({ onRestart }: Props) => {
  return <Text>GameOverScreen</Text>;
};

export default GameOverScreen;
