import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParamList } from "../App";
import Meal from "../models/meal";
type MealsInCategoryScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Meals In Cateory"
>;
type Props = {
  meal: Meal;
};
const MealItem = ({ meal }: Props) => {
  const navigation = useNavigation<MealsInCategoryScreenNavigationProps>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("About the Meal", {
          mealId: meal.id,
        });
      }}
      android_ripple={{ color: "#f0f0f0" }}
      style={({ pressed }) => [
        styles.container,
        {
          opacity: Platform.OS == "ios" && pressed ? 0.6 : 1,
        },
      ]}
    >
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.texts}>
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.subtitle}>{`${
          meal.duration
        }m ${meal.affordability.toLocaleUpperCase()} ${meal.complexity.toLocaleUpperCase()}`}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    // overflow: "hidden",
    marginVertical: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
  texts: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#000",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
  },
});

export default MealItem;
