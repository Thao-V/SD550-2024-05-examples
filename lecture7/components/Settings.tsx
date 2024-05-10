import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Language from "./Language";
import Profile from "./Profile";

const {Navigator, Screen} = createNativeStackNavigator();
export default function Settings(){
  return(
    <Navigator>
      <Screen name="language" component={Language}/>
      <Screen name="profile" component={Profile}/>
    </Navigator>
  )
}