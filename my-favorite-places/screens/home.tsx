import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { HomeScreenNavigationProps } from "../App";
import CustomButton from "../components/custom-button";
import PlaceCard from "../components/place-card";
import Colors from "../constants";
import { Place } from "../models/place";
const dummyPlaces: Place[] = [
  {
    id: "1",
    title: "Place 1",
    imageUri:
      "https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg",
    address: "Address 1",
    coordinates: { lat: 37.78825, lng: -122.4324 },
  },
  {
    id: "2",
    title: "Place 2",
    imageUri:
      "https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg",
    address: "Address 2",
    coordinates: { lat: 37.78825, lng: -122.4324 },
  },
];
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton
          icon={<Ionicons name="add" size={24} color={Colors.gray700} />}
          onPress={() => navigation.navigate("NewPlace")}
          style={{ marginRight: 4 }}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ width: "100%" }}
        data={dummyPlaces}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <PlaceCard
            place={item.item}
            onTap={() => navigation.navigate("Place", { id: item.item.id })}
          />
        )}
        ListEmptyComponent={() => (
          <View>
            <Ionicons name="location-outline" size={24} color="black" />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
  },
});
export default HomeScreen;
