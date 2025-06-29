import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { NewPlaceScreenNavigationProps } from "../App";
import CustomButton from "../components/custom-button";
import Colors from "../constants";
const NewPlaceScreen = () => {
  const navigation = useNavigation<NewPlaceScreenNavigationProps>();
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
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 16, color: Colors.primary500 }}>Title</Text>
        <TextInput placeholder="Enter place title" style={styles.input} />
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No image taken yet.</Text>
        </View>
        <CustomButton
          text="Take Image"
          border={true}
          icon={<Ionicons name="camera" size={24} color={Colors.primary500} />}
          onPress={() => console.log("Add Place Pressed")}
          style={{ marginTop: 16, marginBottom: 16 }}
        />
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No place selected yet.</Text>
        </View>
        <View style={styles.locationButtons}>
          <CustomButton
            border={true}
            text="Locate My Place"
            icon={
              <Ionicons name="location" size={24} color={Colors.primary500} />
            }
            onPress={() => console.log("Locate Pressed")}
          />
          <CustomButton
            border={true}
            text="Pick on Map"
            icon={<Ionicons name="map" size={24} color={Colors.primary500} />}
            onPress={() => console.log("Pick on map Pressed")}
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
    backgroundColor: Colors.primary50,
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
  placeholder: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.primary50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: Colors.gray700,
    fontSize: 16,
  },
});
export default NewPlaceScreen;
