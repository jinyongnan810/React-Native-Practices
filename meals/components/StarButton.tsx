import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform, Pressable } from "react-native";
type Props = {
  stared: boolean;
  onPress: () => void;
};
const StarButton = ({ stared, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#f0f0f0" }}
      style={({ pressed }) => [
        {
          opacity: Platform.OS == "ios" && pressed ? 0.6 : 1,
        },
      ]}
    >
      <Ionicons
        name={stared ? "star" : "star-outline"}
        size={24}
        color="#fff"
      />
    </Pressable>
  );
};

export default StarButton;
