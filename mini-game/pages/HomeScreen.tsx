import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

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
        />
        <View style={styles.enterAreaButtons}>
          <Button title="Reset" onPress={() => setEnteredValue("")} />
          <Button
            title="Confirm"
            onPress={() => {
              const num = parseInt(enteredValue);
              if (isNaN(num) || num < 1 || num > 99) {
                alert("Please enter a number between 1 and 99.");
                return;
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#f7287b",
    padding: 16,
  },
  title: {
    color: "white",
    fontSize: 30,
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
  },
  enterArea: {
    marginTop: 20,
    padding: 24,
    backgroundColor: "#11287b",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    height: 200,
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
