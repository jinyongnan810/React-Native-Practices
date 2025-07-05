import { Stack } from "expo-router";
import React from "react";

const Part1Layout = () => {
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="index" options={{ title: "Part2" }} />
    </Stack>
  );
};

export default Part1Layout;
