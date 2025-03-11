import React from "react";
import { StyleSheet, Text } from "react-native";
import SizeHelper from "../helpers/SizeHelper";
type Props = {
  children: React.ReactNode;
};
const WhiteBorderText = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "DarumadropOne",
    color: "white",
    fontSize: SizeHelper.isLargeScreen ? 40 : 30,
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
    marginTop: 16,
    textAlign: "center",
  },
});

export default WhiteBorderText;
