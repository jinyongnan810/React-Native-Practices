import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import GameOverScreen from "./pages/GameOverScreen";
import GameScreen from "./pages/GameScreen";
import HomeScreen from "./pages/HomeScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<number | null>(null);
  const [tryTimes, setTryTimes] = useState(0);
  let screen = <HomeScreen onPickNumber={setPickedNumber} />;
  if (tryTimes > 0) {
    screen = (
      <GameOverScreen
        onRestart={() => {
          setPickedNumber(null);
          setTryTimes(0);
        }}
      />
    );
  } else {
    if (pickedNumber) {
      screen = <GameScreen num={pickedNumber} onGameOver={setTryTimes} />;
    }
  }

  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient style={styles.screen} colors={["#f7287b", "#ff7e5f"]}>
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.screen}
          imageStyle={{ opacity: 0.2 }}
        >
          <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: "#f7287b",
  },
});
