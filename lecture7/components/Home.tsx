import { Text, View, Button, SafeAreaView } from "react-native";

interface HomeProps{
  navigation: any;
  route: any;
}
export default function Home({navigation}: HomeProps){
  const onGotoProducts = () => {
    navigation.navigate('product-list', {name: "thao", phone: "123"});
  }
  const onProfile = () => {
    navigation.navigate("settings", {screen: "profile"})
  }
  return(
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Products" onPress={onGotoProducts}/>
      <Button title="Profile" onPress={onProfile}/>
    </SafeAreaView>
    
  )
}