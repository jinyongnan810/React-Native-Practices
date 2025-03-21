import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import WhiteBorderText from "../components/WhiteBorderText";
import Colors from "../constants/Color";

type Props = {
  onPickNumber: (num: number) => void;
};

const HomeScreen = ({ onPickNumber }: Props) => {
  const [enteredValue, setEnteredValue] = useState("");
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.page} behavior="position">
        <WhiteBorderText>Guess My Number</WhiteBorderText>
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
                    Alert.alert(
                      "Invalid Number",
                      "Please enter a number between 1 and 99.",
                      [
                        //   {
                        //     text: "Cancel",
                        //     style: "cancel",
                        //     onPress: () => {
                        //       setEnteredValue("");
                        //     },
                        //   },
                        {
                          text: "Okay",
                          style: "destructive",
                          onPress: () => {
                            setEnteredValue("");
                          },
                        },
                      ]
                    );
                    return;
                  }
                  onPickNumber(num);
                }}
              >
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  enterArea: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 0,
    paddingVertical: 24,
    paddingHorizontal: 12,
    backgroundColor: Colors.secondary,
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
    color: Colors.primary,
  },
  enterAreaInput: {
    marginTop: 20,
    width: 100,
    textAlign: "center",
    fontSize: 40,
    color: Colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  enterAreaButtons: {
    flexDirection: "row",
  },
});

export default HomeScreen;
