import React, { ReactNode } from "react";
import {
  Platform,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";
import Colors from "../constants";
type Props = {
  text?: string;
  icon: ReactNode;
  border?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
const CustomButton = ({ text, icon, border, onPress, style }: Props) => {
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
          borderColor: Colors.primary200,
          borderWidth: border ? 2 : 0,
        }}
      >
        {icon}
        {text && (
          <Text style={{ color: Colors.primary200, marginLeft: 4 }}>
            {text}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default CustomButton;
