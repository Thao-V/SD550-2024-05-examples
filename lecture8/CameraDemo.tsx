import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Button, StyleSheet, View, Image } from "react-native";
import * as MediaLib from 'expo-media-library';
export default function CameraDemo(){
  const [permission, requestPermission] = useCameraPermissions();
  const [toggle, setToggle] = useState<string>("front");
  const cameraRef = useRef<any>();
  const [image, setImage] = useState();
  const onCapture = async () => {
    try {
      const photo = await cameraRef.current.takePictureAsync();
      await MediaLib.saveToLibraryAsync(photo.uri);
      setImage(photo.uri);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    async function getPermissionForMediaLib(){
      try {
        const {status} = await MediaLib.requestPermissionsAsync();

      } catch (error) {
        
      }
    }
    getPermissionForMediaLib();
  }, []);
  
  if(!permission){
    return <ActivityIndicator size="large"/>
  }
  if(!permission.granted){
    return <Button title="Request Permisson" onPress={requestPermission}/>
  }
  
  return(
    <CameraView style={styles.container} facing={toggle} ref={cameraRef}>
      <View style={styles.overlayContainer}>
        <Button title="Toggle Camera" onPress={() => setToggle(toggle === 'back'? 'front': 'back')}/>
        <Button title="Capture" onPress={onCapture}/>
        {image && <Image source={{uri: image}} style={styles.image}/>}
      </View>
    </CameraView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlayContainer:{
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  image: {
    width: 100,
    height: 100
  }
})