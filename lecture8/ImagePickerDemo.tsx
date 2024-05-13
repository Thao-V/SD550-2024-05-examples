import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';
export default function ImagePickerDemo(){
  const [status, setStatus] = useState<string>();
  const [image, setImage] = useState<string>();
  const onPickImage = async () => {
    try {
      const photo = await ImagePicker.launchImageLibraryAsync();
      if(!photo.canceled) setImage(photo.assets[0].uri);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    async function getPermission(){
      try {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setStatus(status);
      } catch (error) {
        
      }
    }
    getPermission();
  }, [])
  return(
    <View>
      <Text>Status: {status}</Text>
      <Button title="Pick an Image" onPress={onPickImage}/>
      {image && <Image source={{uri: image}} style={styles.image}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100
  }
})