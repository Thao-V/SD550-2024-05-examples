import React, { useState, useMemo } from "react";



const PureFooter = React.memo(
  function Footer() {
    console.log('Rendered Footer')
    return(
      <div>
    <p>I am a footer</p>
    <h1></h1>
      </div>
      
    )
  }
)

export default function App(){
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  }
  const sumFnc = () => {
    let res = 0;
    for(let i = 0; i < count; i++){
      res += i;
    }
    return res;
  }
  const sum = useMemo(sumFnc, [count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <PureFooter/>
    </div>
  )
}