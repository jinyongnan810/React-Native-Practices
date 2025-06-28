import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Colors from "./constants";
import HomeScreen from "./screens/home";
import MapScreen from "./screens/map";
import NewPlaceScreen from "./screens/new-place";
import PlaceScreen from "./screens/place";
export type RootStackParamList = {
  Home: undefined;
  Place: { id: string };
  NewPlace: undefined;
  Map: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export type PlaceScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Place"
>;
export default function App() {
  return (
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Place" component={PlaceScreen} />
        <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
