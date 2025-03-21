import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import OtherScreen from "./screens/OtherScreen";
import { store } from "./store/store";
export type RootStackParamList = {
  Home: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function App() {
  const HomeTabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2980b9",
        },
        headerTintColor: "#fff",
        sceneStyle: {
          backgroundColor: "#3498db",
        },
        tabBarStyle: {
          backgroundColor: "#2980b9",
        },
        tabBarActiveTintColor: "#e67e22",
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
                backgroundColor: "#2980b9",
              },
              headerTintColor: "#fff",
              contentStyle: {
                backgroundColor: "#3498db",
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
