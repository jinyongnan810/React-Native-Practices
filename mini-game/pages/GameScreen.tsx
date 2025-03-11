import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import GuessHistoryItem from "../components/GuessHistoryItem";
import PrimaryButton from "../components/PrimaryButton";
import WhiteBorderText from "../components/WhiteBorderText";
import Colors from "../constants/Color";

type Props = {
  num: number;
  onGameOver: (tryTimes: number) => void;
};

const GameScreen = ({ num, onGameOver }: Props) => {
  const [opponentsGuess, setOpponentsGuess] = useState<number>(
    Math.floor(Math.random() * 99) + 1
  );
  const [guessHistory, setGuessHistory] = useState<number[]>([]);
  useEffect(() => {
    setGuessHistory([opponentsGuess]);
  }, []);

  useEffect(() => {
    if (opponentsGuess === num) {
      onGameOver(guessHistory.length);
    }
  }, [opponentsGuess]);

  const nextRandomNumber = (lowerBound: number, upperBound: number) => {
    return (
      Math.floor(Math.random() * Math.min(100, upperBound - lowerBound)) +
      lowerBound
    );
  };
  const wrongDirection = () => {
    Alert.alert("Wrong Direction", "Please select the correct direction.", [
      {
        text: "Okay",
        style: "cancel",
      },
    ]);
  };
  return (
    <FlatList
      style={styles.screen}
      data={[{ key: "main" }]}
      renderItem={() => (
        <>
          <WhiteBorderText>Opponent's Guess</WhiteBorderText>
          <Text style={styles.opponentsGuess}>{opponentsGuess}</Text>
          <View style={styles.adjustArea}>
            <Text style={styles.adjustAreaTitle}>Higher or lower?</Text>
            <View style={styles.adjustAreaButtons}>
              <View style={{ flex: 1 }}>
                <PrimaryButton
                  onClick={() => {
                    if (opponentsGuess < num) {
                      wrongDirection();
                      return;
                    }
                    const historyMaxBelow = Math.max(
                      1,
                      ...guessHistory.filter((g) => g < num)
                    );
                    const next = nextRandomNumber(
                      historyMaxBelow,
                      opponentsGuess
                    );
                    setOpponentsGuess(next);
                    setGuessHistory((current) => [...current, next]);
                  }}
                >
                  <Ionicons name="remove" size={24} />
                </PrimaryButton>
              </View>
              <View style={{ flex: 1 }}>
                <PrimaryButton
                  onClick={() => {
                    if (opponentsGuess > num) {
                      wrongDirection();
                      return;
                    }
                    const historyMinAbove = Math.min(
                      ...guessHistory.filter((g) => g > num),
                      100
                    );
                    const next = nextRandomNumber(
                      opponentsGuess,
                      historyMinAbove
                    );
                    setOpponentsGuess(next);
                    setGuessHistory((current) => [...current, next]);
                  }}
                >
                  <Ionicons name="add" size={24} />
                </PrimaryButton>
              </View>
            </View>
          </View>
          <View style={styles.history}>
            <FlatList
              data={guessHistory}
              inverted={true}
              renderItem={(item) => (
                <GuessHistoryItem index={item.index} guess={item.item} />
              )}
            />
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  opponentsGuess: {
    fontFamily: "DarumadropOne",
    fontSize: 45,
    borderWidth: 3,
    color: Colors.secondary,
    borderColor: Colors.secondary,
    borderRadius: 10,
    paddingVertical: 24,
    marginTop: 20,
    textAlign: "center",
    marginHorizontal: 20,
  },
  adjustArea: {
    marginTop: 36,
    marginHorizontal: 16,
    paddingVertical: 24,
    paddingHorizontal: 12,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 160,
    elevation: 10, // Android only
    shadowRadius: 10, // iOS only
    shadowColor: "black", // iOS only
    shadowOpacity: 0.7, // iOS only
    shadowOffset: { width: 0, height: 2 }, // iOS only
  },
  adjustAreaTitle: {
    fontSize: 20,
    color: Colors.primary,
    fontFamily: "DarumadropOne",
  },
  adjustAreaButtons: {
    flexDirection: "row",
  },
  history: {
    paddingVertical: 20,
  },
});

export default GameScreen;
