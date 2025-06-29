import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PlaceScreenNavigationProps, RootStackParamList } from "../App";
import ViewOnMapButton from "../components/view-on-map-button";
import Colors from "../constants";
import { fetchPlaceByIdFromDatabase } from "../helpers/sqlite-helper";
import { Place } from "../models/place";
type PlaceScreenRouteProp = RouteProp<RootStackParamList, "Place">;
const PlaceScreen = () => {
  const { id } = useRoute<PlaceScreenRouteProp>().params;
  const navigation = useNavigation<PlaceScreenNavigationProps>();
  const [place, setPlace] = React.useState<Place | null>(null);
  useEffect(() => {
    // Fetch place details from the database
    fetchPlaceByIdFromDatabase(id).then((fetchedPlace) => {
      if (fetchedPlace) {
        setPlace(fetchedPlace);
      } else {
        console.error("Place not found in database");
        alert("Place not found. Please try again.");
      }
    });
    navigation.setOptions({
      title: place ? place.title : "Place Details",
    });
  }, [id]);

  return (
    <View style={styles.container}>
      {place && (
        <Image
          style={styles.image}
          source={{
            uri: place.imageUri,
          }}
        />
      )}
      {place && <Text style={styles.address}>{place.address}</Text>}

      <ViewOnMapButton
        onPress={() =>
          navigation.navigate("Map", { initialLocation: place?.coordinates })
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "40%",
    objectFit: "cover",
  },
  address: {
    marginTop: 16,
    fontSize: 24,
    color: Colors.primary200,
    marginBottom: 16,
  },
});

export default PlaceScreen;
