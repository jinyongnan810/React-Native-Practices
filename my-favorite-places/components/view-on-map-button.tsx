import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Colors from "../constants";
import CustomButton from "./custom-button";
type Props = {
  onPress?: () => void;
};
const ViewOnMapButton = ({ onPress }: Props) => {
  return (
    <CustomButton
      icon={<Ionicons name={"map"} size={24} color={Colors.primary200} />}
      text="View on Map"
      border={true}
      onPress={onPress}
    />
  );
};

export default ViewOnMapButton;
