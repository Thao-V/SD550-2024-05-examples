import { useReducer, useState } from "react";
import {reducer, ACTION_TYPE} from './Reducer';
export default function MyComponent2(){
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(10);
  const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 10});
  const increaseCount1 = () => {
    //setCount1(count1 + 1);
    dispatch({type: ACTION_TYPE.INC1, data: state.count1 + 1})
  }
  const increaseCount2 = () => {
    //setCount2(count2 + 10);
    dispatch({type: ACTION_TYPE.INC2, data: state.count2 + 10});
  }
  return(
    <div>
      <p>{state.count1}</p>
      <button onClick={increaseCount1}>Increase Count 1</button>
      <p>{state.count2}</p>
      <button onClick={increaseCount2}>Increase Count 2</button>
    </div>
  )
}