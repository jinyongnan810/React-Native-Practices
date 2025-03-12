import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParamList } from "../App";
import DescriptionList from "../components/DescriptionList";
import { MEALS } from "../data/dummy";

type MealScreenRouteProp = RouteProp<RootStackParamList, "About the Meal">;

const MealScreen = () => {
  const { mealId } = useRoute<MealScreenRouteProp>().params;

  const meal = MEALS.filter((meal) => meal.id === mealId)[0];
  if (!meal) {
    return <Text>Meal not found</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.subtitle}>{`${
          meal.duration
        }m ${meal.affordability.toLocaleUpperCase()} ${meal.complexity.toLocaleUpperCase()}`}</Text>

        <DescriptionList title="Ingredients" descriptions={meal.ingredients} />
        <DescriptionList title="Steps" descriptions={meal.steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 3,
    objectFit: "cover",
  },
  body: {
    flex: 1,
    paddingHorizontal: 32,
    alignContent: "center",
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
  },
});

export default MealScreen;
