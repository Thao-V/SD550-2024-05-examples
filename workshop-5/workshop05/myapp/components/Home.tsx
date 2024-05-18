import { createStackNavigator } from "@react-navigation/stack"
import CoursesList from "./CoursesList";
import CourseDetails from "./CourseDetails";
import AddReview from "./AddReview";
import AddCourse from "./AddCourse";
import UpdateCourse from "./UpdateCourse";

const {Navigator, Screen} = createStackNavigator();
export default function Home(){
  return(
    <Navigator>
      <Screen name="courses-list" component={CoursesList} options={{title: "Home", headerShown: false}}/>
      <Screen name="course-details" component={CourseDetails} options={{title: "Course Details"}}/>
      <Screen name="add-review" component={AddReview} options={{title: "Add Review"}}/>
      <Screen name="add-course" component={AddCourse} options={{title: "Add Course"}}/>
      <Screen name="update-course" component={UpdateCourse} options={{title: "Update Course"}}/>
    </Navigator>
  )
}