import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_KEY } from "./components/constants";
import ProductList from "./components/ProductList";
import GlobalContext, { IState } from "./helper/Context";
import { getAllProducts } from "./helper/api";
import IProduct from "./helper/IProduct";

export default function App() {
  const [state, setState] = useState<IState>({token: "", products: []});
  useEffect(() => {
    async function loadToken() {
      try {
        const data = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
        if (data) {          
          setState({...state, token: data});
          //get all products
          const products: IProduct[] = await getAllProducts(data);
          setState({...state, products});
        }
      } catch (error) {}
    }
    loadToken();
  }, []);
  return (
    <GlobalContext.Provider value={{state, setState}}>
      <SafeAreaView style={styles.container}>
        {(state.token !== "") ? <ProductList /> : <Login />}
      </SafeAreaView>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
