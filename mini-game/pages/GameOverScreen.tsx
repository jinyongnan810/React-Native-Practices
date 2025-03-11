import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import WhiteBorderText from "../components/WhiteBorderText";

type Props = {
  tryTimes: number;
  answer: number;
  onRestart: () => void;
};

const GameOverScreen = ({ tryTimes, answer, onRestart }: Props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={{ marginTop: 100 }}>
          <WhiteBorderText>Game Over!</WhiteBorderText>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
          />
          <Text style={styles.text}>
            Your phone needed{" "}
            <Text style={styles.textHighlight}>{tryTimes}</Text> rounds to guess
            the number <Text style={styles.textHighlight}>{answer}</Text>.
          </Text>
          <PrimaryButton onClick={onRestart}>Start new game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
    objectFit: "fill",
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    marginVertical: 32,
    margin: "auto",
  },
  text: {
    fontSize: 32,
    fontFamily: "DarumadropOne",
    textAlign: "center",
  },
  textHighlight: {
    color: "white",
    fontWeight: "bold",
  },
});

export default GameOverScreen;
