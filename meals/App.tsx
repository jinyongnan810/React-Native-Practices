import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { CATEGORIES } from "./data/dummy";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import MealScreen from "./screens/MealScreen";
import MealsInCategoryScreen from "./screens/MealsInCategoryScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

export type RootStackParamList = {
  Home: undefined;
  "Meals In Cateory": { categoryId: string };
  "About the Meal": { mealId: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator();

export default function App() {
  const HomeDrawerNavigator = () => (
    <Drawer.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerActiveTintColor: "#D76C82",
        drawerInactiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#351401",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          title: "My Favorites",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );

  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
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
              name="Home"
              component={HomeDrawerNavigator}
              options={{
                headerShown: false,
                title: "Categories",
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
      </FavoritesContextProvider>
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
