import { ScrollView, View } from "react-native";
import { IReview } from "./ICourse";
import Review from "./Review";

interface ReviewListProps{
  data: IReview[]
}
export default function ReviewList({data}: ReviewListProps){
  return(
    <ScrollView>
      {
        data.map((review: IReview, index: number) => <Review key={index} data={review}/>)
      }
    </ScrollView>
  )
}