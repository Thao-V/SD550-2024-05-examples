import { StyleSheet, Text, View } from "react-native";
import IProduct from "../helper/IProduct";

interface ProductProps{
  data: IProduct;
}
export default function Product({data}: ProductProps){
  return(
    <View style={styles.container}>
        <Text style={styles.text}>{data.name} - {data.price}</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 5
  },
  text: {
    fontSize: 30
  }
})