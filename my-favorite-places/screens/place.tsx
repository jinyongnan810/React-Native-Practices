import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PlaceScreenNavigationProps, RootStackParamList } from "../App";
import ViewOnMapButton from "../components/view-on-map-button";
import Colors from "../constants";
type PlaceScreenRouteProp = RouteProp<RootStackParamList, "Place">;
const PlaceScreen = () => {
  const { id } = useRoute<PlaceScreenRouteProp>().params;
  const navigation = useNavigation<PlaceScreenNavigationProps>();
  useEffect(() => {
    navigation.setOptions({
      title: `Place ${id}`,
    });
  }, [navigation, id]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg",
        }}
      />
      <Text style={styles.address}>Place Screen for {id}</Text>
      <ViewOnMapButton onPress={() => navigation.navigate("Map")} />
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
