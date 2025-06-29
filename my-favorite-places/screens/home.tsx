import { Ionicons } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { HomeScreenNavigationProps } from "../App";
import CustomButton from "../components/custom-button";
import PlaceCard from "../components/place-card";
import Colors from "../constants";
import { fetchPlacesFromDatabase } from "../helpers/sqlite-helper";
import { Place } from "../models/place";
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton
          icon={<Ionicons name="add" size={24} color={Colors.gray700} />}
          onPress={() => navigation.navigate("NewPlace")}
        />
      ),
    });
  }, [navigation]);
  const [places, setPlaces] = React.useState<Place[]>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchPlacesFromDatabase()
        .then((places) => {
          console.log("Fetched places from database:", places);
          setPlaces(places);
        })
        .catch((error) => {
          console.error("Error fetching places from database:", error);
          alert("Failed to fetch places. Please try again.");
        });
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ width: "100%" }}
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <PlaceCard
            place={item.item}
            onTap={() => navigation.navigate("Place", { id: item.item.id })}
          />
        )}
        ListEmptyComponent={() => (
          <View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                color: Colors.primary500,
              }}
            >
              No places found. Add a new place!
            </Text>
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
