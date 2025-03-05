import React from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";
import Colors from "../constants/Color";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const PrimaryButton = ({ children, onClick }: Props) => {
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
      <Text style={styles.primary}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primary: {
    fontSize: 18,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: Colors.primary,
    borderRadius: 40,
    textAlign: "center",
    marginTop: 24,
    marginHorizontal: 4,
    color: "white",
    elevation: 2, // Android only
    shadowRadius: 2, // iOS only
    shadowColor: "black", // iOS only
    shadowOpacity: 0.7, // iOS only
    shadowOffset: { width: 0, height: 2 }, // iOS only
  },
});

export default PrimaryButton;
