import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Meal from "../models/meal";

type Props = {
  meal: Meal;
};
const MealItem = ({ meal }: Props) => {
  return (
    <Pressable
      onPress={() => {}}
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
    overflow: "hidden",
    marginVertical: 8,
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
  texts: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#555",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
  },
});

export default MealItem;
