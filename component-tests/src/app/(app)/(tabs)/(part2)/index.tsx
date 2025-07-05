import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

const Part2Index = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="About Page"
        onPress={() => {
          router.push("/about");
        }}
      />
      <Slider
        style={{ width: 200, height: 40 }}
        maximumValue={100}
        step={1}
        value={50}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => {
          console.log("Slider value:", value);
        }}
      />
    </View>
  );
};

export default Part2Index;
