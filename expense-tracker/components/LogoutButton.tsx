import React from "react";
import { Platform, Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import { onSignout } from "../store/auth";

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={() => dispatch(onSignout())}
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
      <Text style={{ color: "#fff", fontSize: 16, marginLeft: 16 }}>
        Log out
      </Text>
    </Pressable>
  );
};

export default LogoutButton;
