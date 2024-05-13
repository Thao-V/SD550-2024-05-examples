import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import * as Location from "expo-location";
import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";

export default function LocationDemo() {
  const [status, setStatus] = useState<string>();
  const [coords, setCoords] = useState<any>(null);
  useEffect(() => {
    async function getPermission() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        setStatus(status);
        if (status === "granted") {
          const loc = await Location.getCurrentPositionAsync();
          setCoords(loc.coords);
        }
      } catch (error) {}
    }
    getPermission();
  }, []);
  if(!coords){
    return <ActivityIndicator size={"large"}/>
  }
  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Marker
      draggable
      pinColor="red"
      coordinate={coords}
      />
      {/* <View style={styles.overlayTextContainer}>
        <Text>MIU Campus</Text>
      </View> */}
      </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlayTextContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 20
  }
});
