import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import AddButton from "./components/AddButton";
import Colors from "./constants";
import AddOrUpdateScreen from "./screens/AddOrUpdateScreen";
import OtherScreen from "./screens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import { store } from "./store/store";
export type RootStackParamList = {
  Home: undefined;
  AddOrUpdate: { id?: string };
};
export type AddOrUpdateScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "AddOrUpdate"
>;
export type AddOrUpdateScreenRouteProp = RouteProp<
  RootStackParamList,
  "AddOrUpdate"
>;
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function App() {
  const HomeTabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "#fff",
        headerRight: () => <AddButton />,
        sceneStyle: {
          backgroundColor: Colors.secondary,
        },
        tabBarStyle: {
          backgroundColor: Colors.primary,
        },
        tabBarActiveTintColor: Colors.orange,
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Recent Expenses"
        component={RecentExpensesScreen}
        options={{
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="All Expenses"
        component={OtherScreen}
        options={{
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="calendar" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTintColor: "#fff",
              contentStyle: {
                backgroundColor: Colors.secondary,
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeTabNavigator}
              options={{
                title: "Recent Expenses",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AddOrUpdate"
              component={AddOrUpdateScreen}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
