import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { RootStackParamList } from "../App";
import CategoryItem from "../components/CategoryItem";
import { CATEGORIES } from "../data/dummy";
type CategoriesProps = NativeStackNavigationProp<
  RootStackParamList,
  "Categories"
>;
type Props = {
  navigation: CategoriesProps;
};

const CategoriesScreen = ({ navigation }: Props) => {
  const navigationFromHook = useNavigation<CategoriesProps>();
  return (
    <FlatList
      style={styles.container}
      data={CATEGORIES}
      numColumns={2}
      renderItem={(item) =>
        CategoryItem({
          category: item.item,
          onPress: () => {
            // navigation.navigate("Meals In Cateory", {
            //   categoryId: item.item.id,
            // });
            navigationFromHook.navigate("Meals In Cateory", {
              categoryId: item.item.id,
            });
          },
        })
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 32,
  },
});

export default CategoriesScreen;
