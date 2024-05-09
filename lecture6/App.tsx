import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  ActivityIndicator
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = "sd550-rn";
function Product(data: any) {
  return (
    <View>
      <Image source={{ uri: data.image }} style={styles.image} />
      <Text style={styles.text}>
        {data.name}
      </Text>
      <Text style={styles.text}>
        {"$" + data.price}{" "}
      </Text>
    </View>
  );
}
export default function App() {
  const [products, setProducts] = useState<any>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({
        id: i + 1,
        name: "name " + i,
        price: 100 + i,
        image: "https://picsum.photos/200/300"
      });
    }
    setProducts(arr);
  }, []);
  const onSave = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);
    } catch (error) {}
  };
  const onLoadData = async () => {
    try {
      setLoading(true);
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      
      if (data) {
        setName(data);
      }

      setLoading(false);
      
    } catch (error) {
      setLoading(false);
    }
  };
  if(loading){
    return(
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size={"large"}/>
      </SafeAreaView>
    ) 
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios'? "padding": "height"}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={(text: string) => setName(text)}
        />
        <Button title="Save" onPress={onSave} />
        <Button title="Load Data" onPress={onLoadData} />
        {/* <ScrollView>
        {products.map((product: any) =>
          <Product key={product.id} {...product} />
        )}
      </ScrollView> */}
        {/* <FlatList
        data={products}
        renderItem={({item}: any) => <Product {...item}/>}
        keyExtractor={(product: any) => product.id}
      /> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    width: 300,
    fontSize: 30
  },
  text: {
    backgroundColor: "red",
    color: "white",
    fontSize: 24
  },
  image: {
    width: 100,
    height: 100
  }
});
