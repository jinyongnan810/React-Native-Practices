import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { RootState } from "../store/redux/store";
type Props = {
  id: string;
};
const StarButton = ({ id }: Props) => {
  // const { addFavorite, removeFavorite, isFavorite } =
  //   useContext(FavoritesContext);
  // const stared = isFavorite(id);

  const dispatch = useDispatch();
  const stared = useSelector((state: RootState) =>
    state.favorites.ids.includes(id)
  );

  return (
    <Pressable
      onPress={
        stared
          ? () => dispatch(removeFavorite(id))
          : () => dispatch(addFavorite(id))
      }
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
