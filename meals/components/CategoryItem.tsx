import React from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";
import Category from "../models/category";

type Props = {
  category: Category;
  onPress: () => void;
};
const CategoryItem = ({ category, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#f0f0f0" }}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: `${category.color}` },
        {
          opacity: Platform.OS == "ios" && pressed ? 0.6 : 1,
        },
      ]}
    >
      <Text style={styles.title}>{category.title}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default CategoryItem;
