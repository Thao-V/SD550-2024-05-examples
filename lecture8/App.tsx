import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LocationDemo from './LocationDemo';
import ImagePickerDemo from './ImagePickerDemo';
import CameraDemo from './CameraDemo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hardware Demo</Text>
        {/* <LocationDemo/> */}
        {/* <ImagePickerDemo/> */}
        <CameraDemo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
