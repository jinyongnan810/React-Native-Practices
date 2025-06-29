import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { PlaceScreenNavigationProps, RootStackParamList } from "../App";
type PlaceScreenRouteProp = RouteProp<RootStackParamList, "Place">;
const PlaceScreen = () => {
  const { id } = useRoute<PlaceScreenRouteProp>().params;
  const navigation = useNavigation<PlaceScreenNavigationProps>();
  useEffect(() => {
    navigation.setOptions({
      title: `Place ${id}`,
    });
  }, [navigation, id]);
  return <Text>place id: {id}</Text>;
};

export default PlaceScreen;
