import { createContext } from "react";
import IProduct from "./IProduct";


export interface IState{
  token: string;
  products: IProduct[];
}

interface IContext{
  state: IState;
  setState: (state: IState) => void;
}

const GlobalContext = createContext<IContext>({
  state: {token: "", products: []},
  setState: () => {}
});

export default GlobalContext;