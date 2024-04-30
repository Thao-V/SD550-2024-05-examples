import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyComponent2 from './components/MyComponent2';


function App() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [showHide, setShowHide] = useState(true);
  const onShowHide = () => {
    setShowHide(!showHide);
  }
  const [text, setText] = useState("Hello");
  const changeText = () => {
    console.log(textRef);
    if(textRef.current){
      textRef.current.innerHTML = "Hello World";
    }
  }
  return (
    <div className="App">
      {showHide && <MyComponent/>}
      <button onClick={onShowHide}>Show/Hide</button>
      <p ref={textRef}>{text}</p>
      <button onClick={changeText}>Change Text</button>
      <MyComponent2/>
    </div>
  );
}

export default App;
