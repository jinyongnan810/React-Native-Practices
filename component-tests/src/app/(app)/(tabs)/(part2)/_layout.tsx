import { Stack } from "expo-router";
import React from "react";

const Part1Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Part2" }} />
    </Stack>
  );
};

export default Part1Layout;
