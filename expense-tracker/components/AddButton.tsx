import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, Pressable } from "react-native";
import { AddOrUpdateScreenNavigationProps } from "../App";

const AddButton = () => {
  const navigation = useNavigation<AddOrUpdateScreenNavigationProps>();
  return (
    <Pressable
      onPress={() => navigation.navigate("AddOrUpdate", {})}
      android_ripple={{ color: "#f0f0f0" }}
      style={({ pressed }) => [
        {
          opacity: Platform.OS == "ios" && pressed ? 0.6 : 1,
        },
        {
          marginRight: 10,
        },
      ]}
    >
      <Ionicons name={"add"} size={24} color="#fff" />
    </Pressable>
  );
};

export default AddButton;
