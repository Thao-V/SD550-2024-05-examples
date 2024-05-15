import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { LOCAL_STORAGE_KEY } from "./constants";
import { useContext, useEffect } from "react";
import GlobalContext from "../helper/Context";
import Product from "./Product";

export default function ProductList() {
  const { state, setState } = useContext(GlobalContext);

  const onLogout = async () => {
    try {
      await AsyncStorage.removeItem(LOCAL_STORAGE_KEY);
      setState({ ...state, token: "" });
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
      <ScrollView>
        {state.products.map((product: any) =>
          <Product data={product} key={product.id} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 30
  }
});
