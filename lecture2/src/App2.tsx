import {useContext, useState, createContext} from 'react';


const GlobalContext = createContext<any>(null);

function Component1(){
  const {state} = useContext(GlobalContext);
  return(
    <div> 
      <h1>Component 1</h1>
      <p>{state.message}</p>
    </div>
  )
}

function Component2(){
  const {state} = useContext<any>(GlobalContext);
  return(
    <div> 
      <h1>Component 2</h1>
      <p>{state.message}</p>
    </div>
  )
}



export default function App(){
  const [state, setState] = useState({message: "Hello"});
  return (
    <GlobalContext.Provider value={{state, setState}}>
    <div>
          <Component1/>
          <Component2/>
    </div>
    </GlobalContext.Provider>
    
  )
}