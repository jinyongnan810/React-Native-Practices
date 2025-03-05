import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import HomeScreen from "./pages/HomeScreen";

export default function App() {
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
          <HomeScreen />
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
