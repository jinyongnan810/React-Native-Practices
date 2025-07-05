import React from "react";
import { Text, View } from "react-native";

const About = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{ padding: 20, backgroundColor: "#f0f0f0", borderRadius: 10 }}
      >
        <Text style={{ fontSize: 18, color: "#333" }}>
          This is the About page of the app. Here you can find information about
          the app and its features.
        </Text>
      </View>
    </View>
  );
};

export default About;
