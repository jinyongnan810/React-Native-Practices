import React from "react";
import { StyleSheet, Text, useWindowDimensions } from "react-native";
import SizeHelper from "../helpers/SizeHelper";
type Props = {
  children: React.ReactNode;
};
const WhiteBorderText = ({ children }: Props) => {
  const { height } = useWindowDimensions();
  return (
    <Text style={[styles.title, { padding: height < 480 ? 12 : 24 }]}>
      {children}
    </Text>
  );
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
