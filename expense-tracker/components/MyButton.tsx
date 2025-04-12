import React from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";
import Colors from "../constants";
type ButtonType = "primary" | "secondary" | "danger";
type Props = {
  children: React.ReactNode;
  onClick: () => void;
  type: ButtonType;
  disabled?: boolean;
};

const MyButton = ({ children, onClick, type, disabled }: Props) => {
  const backgroundColor = getBackgroundColor(type);
  return (
    <Pressable
      onPress={onClick}
      disabled={disabled}
      android_ripple={{ color: "#f0f0f0" }}
      style={({ pressed }) => [
        {
          opacity: Platform.OS == "ios" && pressed ? 0.6 : 1,
        },
      ]}
    >
      <Text
        style={[
          styles.primary,
          {
            backgroundColor,
          },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const getBackgroundColor = (type: ButtonType) => {
  switch (type) {
    case "primary":
      return Colors.primary;
    case "secondary":
      return Colors.secondary;
    case "danger":
      return Colors.red;
  }
};

const styles = StyleSheet.create({
  primary: {
    fontSize: 18,
    minWidth: 140,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    textAlign: "center",
    color: "white",
    elevation: 2, // Android only
    shadowRadius: 2, // iOS only
    shadowColor: "black", // iOS only
    shadowOpacity: 0.7, // iOS only
    shadowOffset: { width: 0, height: 2 }, // iOS only
  },
});

export default MyButton;
