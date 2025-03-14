import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Platform, Pressable } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
type Props = {
  id: string;
};
const StarButton = ({ id }: Props) => {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);
  const stared = isFavorite(id);
  return (
    <Pressable
      onPress={stared ? () => removeFavorite(id) : () => addFavorite(id)}
      android_ripple={{ color: "#f0f0f0" }}
      style={({ pressed }) => [
        {
          opacity: Platform.OS == "ios" && pressed ? 0.6 : 1,
        },
      ]}
    >
      <Ionicons
        name={stared ? "star" : "star-outline"}
        size={24}
        color="#fff"
      />
    </Pressable>
  );
};

export default StarButton;
