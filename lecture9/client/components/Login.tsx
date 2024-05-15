import { useContext, useState } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { login } from "../helper/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_KEY } from "./constants";
import GlobalContext from "../helper/Context";

export default function Login(){
  const [email, setEmail] = useState("");
  const {state, setState} = useContext(GlobalContext);

  const onLogin = async () => {
    if(email === ""){
      return Alert.alert("Please enter email");
    }
    try {
      const token = await login(email);
      if(token === null){
        Alert.alert("Wrong email");
      }else{
        AsyncStorage.setItem(LOCAL_STORAGE_KEY, token);
        setState({...state, token});
      }
    } catch (error) {
      
    }
  }
  return (
   <View style={styles.container}>
    <TextInput placeholder="email" style={styles.input} autoCapitalize="none"
    value={email} onChangeText={(text: string) => setEmail(text.trim())}
    />
    <Pressable style={styles.button} onPress={onLogin}>
      <Text style={styles.buttonText}>Login</Text>
    </Pressable>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: "80%",
    fontSize: 30,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 30
  }
})