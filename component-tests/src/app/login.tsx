import { authAtom } from "@/jotai/auth-atom";
import { useRouter } from "expo-router";
import { useSetAtom } from "jotai";
import React from "react";
import { Button, View } from "react-native";

const Login = () => {
  const router = useRouter();
  const setAuth = useSetAtom(authAtom);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Login"
        onPress={() => {
          setAuth({ isAuthenticated: true });
          router.replace("/(app)/(tabs)/(part1)");
        }}
      />

      <Button
        title="withoutLogin"
        onPress={() => {
          router.replace("/(app)/(tabs)/(part1)");
        }}
      />
    </View>
  );
};

export default Login;
