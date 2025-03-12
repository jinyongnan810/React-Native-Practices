import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
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
type MealScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Meals In Cateory"
>;

const MealScreen = () => {
  const { mealId } = useRoute<MealScreenRouteProp>().params;
  const navigation = useNavigation<MealScreenNavigationProp>();

  const meal = MEALS.filter((meal) => meal.id === mealId)[0];

  useEffect(() => {
    if (!meal) {
      navigation.setOptions({ title: "Meal not found" });
    } else {
      navigation.setOptions({ title: meal.title });
    }
  }, []);
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
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
    color: "#888",
  },
});

export default MealScreen;
