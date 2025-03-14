import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy";
import { FavoritesContext } from "../store/context/favorites-context";

const FavoriteScreen = () => {
  const { ids: favoriteIds } = useContext(FavoritesContext);
  const meals = MEALS.filter((meal) => favoriteIds.includes(meal.id));

  if (meals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.empty}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

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
  empty: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
  },
});
export default FavoriteScreen;
