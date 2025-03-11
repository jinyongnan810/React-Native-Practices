import React from "react";
import { Platform, StyleSheet, Text, useWindowDimensions } from "react-native";
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
    // we can also make WhiteBorderText.ios.tsx and WhiteBorderText.android.tsx and import them in WhiteBorderText
    borderWidth: Platform.select({ ios: 3, android: 2 }),
    borderColor: "white",
    padding: 10,
    marginTop: 16,
    textAlign: "center",
  },
});

export default WhiteBorderText;
