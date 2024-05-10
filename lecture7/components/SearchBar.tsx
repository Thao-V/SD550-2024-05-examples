import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function SearchBar(){
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const onGoHome = () => {
    navigation.navigate("home");
  }
  return(
    <View>
      {/* <Text>{JSON.stringify(route.params)}</Text> */}
      <Button title="Home" onPress={onGoHome}/>
    </View>
  )
}