import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const HomeScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Guess My Number</Text>
      <View style={styles.enterArea}>
        <Text style={styles.enterAreaTitle}>Enter a Number</Text>
        <TextInput
          style={styles.enterAreaInput}
          value={enteredValue}
          onChangeText={setEnteredValue}
          autoComplete="off"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles.enterAreaButtons}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onClick={() => setEnteredValue("")}>
              Reset
            </PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton
              onClick={() => {
                const num = parseInt(enteredValue);
                if (isNaN(num) || num < 1 || num > 99) {
                  alert("Please enter a number between 1 and 99.");
                  return;
                }
              }}
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  title: {
    color: "white",
    fontSize: 30,
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
    marginTop: 200,
  },
  enterArea: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 16,
    paddingVertical: 24,
    paddingHorizontal: 12,
    backgroundColor: "#11287b",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 240,
    elevation: 10, // Android only
    shadowRadius: 10, // iOS only
    shadowColor: "black", // iOS only
    shadowOpacity: 0.7, // iOS only
    shadowOffset: { width: 0, height: 2 }, // iOS only
  },
  enterAreaTitle: {
    fontSize: 20,
    color: "#f7287b",
  },
  enterAreaInput: {
    marginTop: 20,
    width: 100,
    textAlign: "center",
    fontSize: 40,
    color: "#f7287b",
    borderBottomWidth: 2,
    borderBottomColor: "#f7287b",
  },
  enterAreaButtons: {
    flexDirection: "row",
  },
});

export default HomeScreen;
