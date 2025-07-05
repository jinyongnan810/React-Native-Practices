import { authAtom } from "@/jotai/auth-atom";
import { Redirect, Stack } from "expo-router";
import { useAtomValue } from "jotai";
import React from "react";

const MainLayout = () => {
  const isAuthenticated = useAtomValue(authAtom).isAuthenticated;
  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default MainLayout;
