import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Switch, View } from "react-native";

const Part2Index = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = React.useState(false);
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
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled((previousState) => !previousState)}
        value={isEnabled}
      />
    </View>
  );
};

export default Part2Index;
