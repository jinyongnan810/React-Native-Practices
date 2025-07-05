import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export { ErrorBoundary } from "expo-router";

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="(app)" />
        <Stack.Screen name="about" />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
