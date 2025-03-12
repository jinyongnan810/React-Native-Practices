import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { RootStackParamList } from "../App";

type MealsInCategoryScreenRouteProp = RouteProp<
  RootStackParamList,
  "Meals In Cateory"
>;

type Props = {
  route: MealsInCategoryScreenRouteProp;
};

const MealsInCategoryScreen = ({ route }: Props) => {
  // const { categoryId } = route.params;
  const { categoryId } = useRoute<MealsInCategoryScreenRouteProp>().params;
  return <Text>{categoryId}</Text>;
};

export default MealsInCategoryScreen;
