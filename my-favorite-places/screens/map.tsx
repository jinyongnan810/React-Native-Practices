import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MapScreenNavigationProps, RootStackParamList } from "../App";
type MapScreenRouteProp = RouteProp<RootStackParamList, "Map">;
const MapScreen = () => {
  const { initialLocation, onLocationSelected, isFromNewPlace } =
    useRoute<MapScreenRouteProp>().params;
  const [selectedLocation, setSelectedLocation] = React.useState<{
    lat: number;
    lng: number;
  } | null>(!isFromNewPlace && initialLocation ? initialLocation : null);
  const navigation = useNavigation<MapScreenNavigationProps>();
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        isFromNewPlace ? (
          <Button
            title="Select"
            disabled={!selectedLocation}
            onPress={() => {
              if (selectedLocation) {
                onLocationSelected?.(selectedLocation);
                navigation.goBack();
              }
            }}
            color="#fff"
          />
        ) : null,
    });
  }, [selectedLocation, navigation]);
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: initialLocation?.lat ?? 37.78825,
        longitude: initialLocation?.lng ?? -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onPress={(event) => {
        console.log("Map pressed at:", event.nativeEvent.coordinate);
        setSelectedLocation({
          lat: event.nativeEvent.coordinate.latitude,
          lng: event.nativeEvent.coordinate.longitude,
        });
      }}
    >
      {selectedLocation && (
        <Marker
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
          title="Selected Location"
        />
      )}
    </MapView>
  );
};

export default MapScreen;
