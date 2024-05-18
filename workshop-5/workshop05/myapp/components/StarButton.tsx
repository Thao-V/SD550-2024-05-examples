import { AntDesign } from "@expo/vector-icons";
import { Alert, Pressable } from "react-native";

interface StarButtonProps{
  value: number;
  selectedValue: number;
  setSelectedValue: (selected: number) => void
}
export default function StarButton({value, selectedValue, setSelectedValue}: StarButtonProps){
  const onPress = () => {
    setSelectedValue(value);
  }
  const color = value <= selectedValue ? "gold": "grey";
  return(
    <Pressable onPress={onPress} style={{margin: 10}}>
      <AntDesign name="star" size={40} color={color} />
    </Pressable>
  )
}