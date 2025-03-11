import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { CATEGORIES } from "../data/dummy";

const CategoriesScreen = () => {
  return (
    <FlatList
      style={styles.container}
      data={CATEGORIES}
      numColumns={2}
      renderItem={(item) => CategoryItem({ category: item.item })}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoriesScreen;
