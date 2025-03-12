import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { RootStackParamList } from "../App";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy";

export type MealsInCategoryScreenRouteProp = RouteProp<
  RootStackParamList,
  "Meals In Cateory"
>;

type Props = {
  route: MealsInCategoryScreenRouteProp;
};

const MealsInCategoryScreen = ({ route }: Props) => {
  // const { categoryId } = route.params;
  const { categoryId } = useRoute<MealsInCategoryScreenRouteProp>().params;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return (
    <FlatList
      style={styles.container}
      data={meals}
      renderItem={({ item }) => <MealItem meal={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default MealsInCategoryScreen;
