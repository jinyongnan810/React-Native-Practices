import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../constants";
import { Place } from "../models/place";
type Props = {
  place: Place;
  onTap: () => void;
};
const PlaceCard = ({ place, onTap }: Props) => {
  return (
    <Pressable
      onPress={onTap}
      android_ripple={{ color: "#f0f0f0" }}
      style={({ pressed }) => [
        {
          opacity: Platform.OS == "ios" && pressed ? 0.6 : 1,
        },
      ]}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: place.imageUri }} />
        <View style={styles.info}>
          <Text style={styles.title}>{place.title}</Text>
          <Text style={styles.address}>{place.address}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Colors.primary,
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "cover",
  },
  info: {
    flex: 1,
    padding: 8,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  address: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "300",
  },
});

export default PlaceCard;
