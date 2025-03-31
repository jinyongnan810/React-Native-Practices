import React from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
type Props = {
  label: string;
  type: KeyboardTypeOptions;
  value: string;
  onSetValue: (value: string) => void;
};
const MyInput = ({ label, type, value, onSetValue }: Props) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={type}
        placeholder={label}
        value={value}
        onChange={(e) => onSetValue(e.nativeEvent.text)}
        autoCorrect={false}
        autoComplete="off"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 24,
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
    color: "#fff",
  },
});

export default MyInput;
