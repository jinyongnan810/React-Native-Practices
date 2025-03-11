import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  const screen = <CategoriesScreen />;
  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient
        style={styles.screen}
        colors={[Colors.primary, "#ff7e5f"]}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
});
