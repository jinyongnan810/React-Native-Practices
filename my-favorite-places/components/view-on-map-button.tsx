import { Ionicons } from "@expo/vector-icons";
import React from "react";
import CustomButton from "./custom-button";
type Props = {
  onPress?: () => void;
};
const ViewOnMapButton = ({ onPress }: Props) => {
  return (
    <CustomButton
      icon={<Ionicons name={"map"} size={24} color="#fff" />}
      text="View on Map"
      onPress={onPress}
    />
  );
};

export default ViewOnMapButton;
