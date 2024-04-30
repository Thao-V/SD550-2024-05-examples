import { useState, useEffect } from "react";
export default function MyComponent(){
  const [count, setCount] = useState(0);
  const [messsage, setMsg] = useState("Hello");
  console.log('Rendered MyComponent');
  useEffect(() => {
    console.log('Mounted this component');

    return () => console.log("Unmounted this component");
  }, [])
  useEffect(() => {
    console.log("count is changed 1");
    return () => console.log("count is changed 2");
  }, [count, messsage])
  useEffect(() => {
    console.log('rendered 1')
    return () => console.log('rendered 2')
  })
  const increase = () => {
    setCount(count + 1);
  }
  const changeMessage = () => {
    setMsg(messsage + " 1");
  }
  return(
    <div>
      <p>My Component</p>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <p>{messsage}</p>
      <button onClick={changeMessage}>Change Message</button>
    </div>
    
  )
}