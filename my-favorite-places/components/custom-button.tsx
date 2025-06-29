import React, { ReactNode } from "react";
import {
  Platform,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";
type Props = {
  text: string;
  icon: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
const CustomButton = ({ text, icon, onPress, style }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#f0f0f0" }}
      style={({ pressed }) => [
        {
          opacity: Platform.OS == "ios" && pressed ? 0.6 : 1,
        },
        style,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderColor: "#fff",
          borderWidth: 2,
        }}
      >
        {icon}
        <Text style={{ color: "#fff" }}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;
