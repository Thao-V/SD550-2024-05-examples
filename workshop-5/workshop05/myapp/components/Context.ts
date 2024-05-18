import { createContext } from "react";
import ICourse from "./ICourse";
import { Icon } from "@expo/vector-icons/build/createIconSet";

interface IContext{
  state: ICourse[];
  setState: (courses: ICourse[]) => void;
  setLoggedIn: (value: boolean) => void;
}
const GlobalContext = createContext<IContext>({
  state: [],
  setState: () => {},
  setLoggedIn: () => {}
});
export default GlobalContext;