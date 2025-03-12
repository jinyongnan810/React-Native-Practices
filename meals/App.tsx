import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { CATEGORIES } from "./data/dummy";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealScreen from "./screens/MealScreen";
import MealsInCategoryScreen from "./screens/MealsInCategoryScreen";

export type RootStackParamList = {
  Categories: undefined;
  "Meals In Cateory": { categoryId: string };
  "About the Meal": { mealId: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#fff",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "Meal Categories",
              // headerStyle: {
              //   backgroundColor: "#351401",
              // },
              // headerTintColor: "#fff",
              // contentStyle: {
              //   backgroundColor: "#3f2f25",
              // },
            }}
          />
          <Stack.Screen
            name="Meals In Cateory"
            component={MealsInCategoryScreen}
            options={({ route }) => {
              const category = CATEGORIES.find(
                (category) => category.id === route.params.categoryId
              );
              if (!category) {
                return {};
              }
              return {
                title: category.title,
              };
            }}
          />
          <Stack.Screen
            name="About the Meal"
            component={MealScreen}
            // options={({ route }) => {
            //   const mealId = route.params.mealId;
            //   const meal = MEALS.find((meal) => meal.id === mealId);
            //   if (!meal) {
            //     return {};
            //   }
            //   return {
            //     title: meal.title,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
});
