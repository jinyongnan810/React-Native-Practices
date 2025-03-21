import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
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
import HomeScreen from "./screens/HomeScreen";
import OtherScreen from "./screens/OtherScreen";
import { store } from "./store/store";
export type RootStackParamList = {
  Home: undefined;
  "Add Expense": undefined;
};
export type AddOrUpdateScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Add Expense"
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
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Other"
        component={OtherScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="text" size={size} color={color} />;
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
              name="Add Expense"
              component={AddOrUpdateScreen}
              options={{
                title: "Add Expense",
              }}
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
