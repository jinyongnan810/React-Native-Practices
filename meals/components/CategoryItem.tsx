import React from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";
import Category from "../models/category";

type Props = {
  category: Category;
};
const CategoryItem = ({ category }: Props) => {
  return (
    <Pressable
      onPress={() => {
        console.log(`Category ${category.title} pressed`);
      }}
      android_ripple={{ color: "#f0f0f0" }}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: `${category.color}` },
        {
          opacity: Platform.OS == "ios" && pressed ? 0.6 : 1,
        },
      ]}
    >
      <Text>{category.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    margin: 10,
  },
});

export default CategoryItem;
