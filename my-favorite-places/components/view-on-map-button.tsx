import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform, Pressable, Text, View } from "react-native";
type Props = {
  onPress?: () => void;
};
const ViewOnMapButton = ({ onPress }: Props) => {
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderColor: "#fff",
          borderWidth: 2,
        }}
      >
        <Ionicons name={"map"} size={24} color="#fff" />
        <Text style={{ color: "#fff" }}>View on Map</Text>
      </View>
    </Pressable>
  );
};

export default ViewOnMapButton;
