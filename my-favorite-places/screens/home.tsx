import { Ionicons } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { HomeScreenNavigationProps } from "../App";
import CustomButton from "../components/custom-button";
import PlaceCard from "../components/place-card";
import Colors from "../constants";
import {
  deletePlaceFromDatabase,
  fetchPlacesFromDatabase,
} from "../helpers/sqlite-helper";
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

  const handleDelete = (id: string) => {
    deletePlaceFromDatabase(id)
      .then(() => {
        setPlaces((prev) => prev.filter((place) => place.id !== id));
        console.log("Place deleted successfully:", id);
      })
      .catch((error) => {
        console.error("Error deleting place from database:", error);
        alert("Failed to delete place. Please try again.");
      });
  };
  function RightAction(
    id: string,
    prog: SharedValue<number>,
    drag: SharedValue<number>
  ) {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        // transform: [{ translateX: drag.value + 50 }],
        justifyContent: "center",
        alignItems: "flex-end",
      };
    });

    return (
      <Reanimated.View style={styleAnimation}>
        <CustomButton
          icon={<Ionicons name="trash" size={24} color="white" />}
          onPress={() => handleDelete(id)}
          style={{
            backgroundColor: "red",
            marginRight: 4,
            marginLeft: 4,
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Reanimated.View>
    );
  }
  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <FlatList
          contentContainerStyle={{ width: "100%" }}
          data={places}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <ReanimatedSwipeable
              friction={2}
              enableTrackpadTwoFingerGesture
              rightThreshold={40}
              renderRightActions={(progress, translation) =>
                RightAction(item.item.id, progress, translation)
              }
            >
              <PlaceCard
                place={item.item}
                onTap={() => navigation.navigate("Place", { id: item.item.id })}
              />
            </ReanimatedSwipeable>
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
      </GestureHandlerRootView>
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
