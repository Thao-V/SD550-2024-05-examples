import { Text, View } from "react-native";
import { IReview } from "./ICourse";

interface ReviewProps{
  data: IReview
}
export default function Review({data}: ReviewProps){
  return(
    <View>
      <Text>{data.name}-{data.comment}</Text>
    </View>
  )
}