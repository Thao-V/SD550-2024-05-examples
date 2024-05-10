import { Text, View, Button, SafeAreaView } from "react-native";
import SearchBar from "./SearchBar";

interface ProductListProps{
  navigation: any;
  route: any
}
export default function ProductList({navigation, route}: ProductListProps){
  return (
    <SafeAreaView>
      <Text>Product List</Text>
      {/* <SearchBar/>
      <Text>{JSON.stringify(route.params)}</Text> */}
    {/* <Button title="Home" onPress={() => navigation.navigate('home')}/> */}
    </SafeAreaView>
    
  )
}