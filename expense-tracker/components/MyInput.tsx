import React from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from "react-native";
import Colors from "../constants";
type Props = {
  style?: StyleProp<TextStyle>;
  label: string;
  type: KeyboardTypeOptions;
  placeholder?: string;
  maxLength?: number;
  value: string;
  isInvalid?: boolean;
  secure?: boolean;
  onSetValue: (value: string) => void;
};
const MyInput = ({
  style,
  label,
  type,
  placeholder,
  maxLength,
  value,
  isInvalid,
  secure,
  onSetValue,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input]}
        keyboardType={type}
        placeholder={placeholder ?? label}
        value={value}
        onChange={(e) => onSetValue(e.nativeEvent.text)}
        autoCorrect={false}
        autoComplete="off"
        maxLength={maxLength}
        placeholderTextColor={"#aaa"}
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: "#fff",
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
  labelInvalid: {
    color: Colors.red,
  },
});

export default MyInput;
