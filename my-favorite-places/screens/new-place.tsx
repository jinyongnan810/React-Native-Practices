import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { NewPlaceScreenNavigationProps } from "../App";
import CustomButton from "../components/custom-button";
import Colors from "../constants";
const NewPlaceScreen = () => {
  const navigation = useNavigation<NewPlaceScreenNavigationProps>();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="done"
          onPress={() => {
            navigation.goBack();
          }}
          color={Colors.gray700}
        />
      ),
    });
  }, [navigation]);
  const pickImage = async () => {
    console.log("pickImage called");
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera is required!");
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const getMyLocation = async () => {
    let permissionResult = await Location.requestForegroundPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access location is required!");
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    console.log(location);
    return { lat: location.coords.latitude, lng: location.coords.longitude };
  };

  const setToMyLocation = async () => {
    const myLocation = await getMyLocation();
    if (!myLocation) {
      return;
    }
    const { lat, lng } = myLocation;
    setLocation({ lat, lng });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 16, color: Colors.primary500 }}>Title</Text>
        <TextInput
          placeholder="Enter place title"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.image}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%", borderRadius: 8 }}
            />
          )}
          {!image && (
            <Text style={styles.placeholderText}>No image taken yet.</Text>
          )}
        </View>
        <CustomButton
          text="Take Image"
          border={true}
          icon={<Ionicons name="camera" size={24} color={Colors.primary500} />}
          onPress={pickImage}
          style={{ marginTop: 16, marginBottom: 16 }}
        />
        <View style={styles.image}>
          {location && (
            <MapView
              style={{ width: "100%", height: "100%", borderRadius: 8 }}
              region={{
                latitude: location.lat,
                longitude: location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.lat,
                  longitude: location.lng,
                }}
                title={title}
              />
            </MapView>
          )}
          {!location && (
            <Text style={styles.placeholderText}>No place selected.</Text>
          )}
        </View>
        <View style={styles.locationButtons}>
          <CustomButton
            border={true}
            text="Locate My Place"
            icon={
              <Ionicons name="location" size={24} color={Colors.primary500} />
            }
            onPress={setToMyLocation}
          />
          <CustomButton
            border={true}
            text="Pick on Map"
            icon={<Ionicons name="map" size={24} color={Colors.primary500} />}
            onPress={async () => {
              const initialLocation = await getMyLocation();

              navigation.navigate("Map", {
                initialLocation: initialLocation,
                onLocationSelected: (location) => {
                  setLocation(location);
                  console.log("Selected location:", location);
                },
              });
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  input: {
    borderColor: Colors.primary200,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: Colors.primary100,
    color: Colors.gray700,
    marginBottom: 16,
    height: 40,
    fontSize: 24,
    marginTop: 12,
  },
  locationButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.primary100,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    objectFit: "cover",
  },
  placeholderText: {
    color: Colors.gray700,
    fontSize: 16,
  },
});
export default NewPlaceScreen;
