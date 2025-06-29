import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
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
export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
export type PlaceScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Place"
>;
export type NewPlaceScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "NewPlace"
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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My Favorite Places",
          }}
        />
        <Stack.Screen name="Place" component={PlaceScreen} />
        <Stack.Screen
          name="NewPlace"
          component={NewPlaceScreen}
          options={{
            title: "Add a New Place",
          }}
        />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
