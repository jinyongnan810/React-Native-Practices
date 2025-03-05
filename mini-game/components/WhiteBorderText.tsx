import React from "react";
import { StyleSheet, Text } from "react-native";
type Props = {
  children: React.ReactNode;
};
const WhiteBorderText = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 30,
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
    marginTop: 16,
    textAlign: "center",
  },
});

export default WhiteBorderText;
