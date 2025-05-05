import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Provider, useSelector } from "react-redux";
import AddButton from "./components/AddButton";
import LogoutButton from "./components/LogoutButton";
import Colors from "./constants";
import AddOrUpdateScreen from "./screens/AddOrUpdateScreen";
import OtherScreen from "./screens/AllExpensesScreen";
import LoginScreen from "./screens/LoginScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import SignupScreen from "./screens/SignupScreen";
import { restoreAuth } from "./store/auth";
import { useAppDispatch } from "./store/hooks";
import { RootState, store } from "./store/store";
export type RootStackParamList = {
  Home: undefined;
  AddOrUpdate: { id?: string };
  Login: undefined;
  Signup: undefined;
};
export type AddOrUpdateScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "AddOrUpdate"
>;
export type AddOrUpdateScreenRouteProp = RouteProp<
  RootStackParamList,
  "AddOrUpdate"
>;
export type LoginScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;
export type SignupScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Signup"
>;
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.secondary },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "#fff",
        headerRight: () => <AddButton />,
        headerLeft: () => <LogoutButton />,
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
}
function AuthenticatedStack() {
  return (
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
  );
}

function AppStack() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(restoreAuth());
  }, [dispatch]);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.authState !== undefined
  );
  console.log("isAuthenticated", isAuthenticated);
  if (isAuthenticated) {
    return <AuthenticatedStack />;
  }
  return <AuthStack />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <AppStack />
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
