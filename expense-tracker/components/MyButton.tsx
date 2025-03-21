import React from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";
import Colors from "../constants";
type Props = {
  children: React.ReactNode;
  onClick: () => void;
  isPrimary: boolean;
};

const MyButton = ({ children, onClick, isPrimary }: Props) => {
  return (
    <Pressable
      onPress={onClick}
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
          isPrimary
            ? {
                backgroundColor: Colors.primary,
              }
            : {
                backgroundColor: Colors.secondary,
              },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
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
