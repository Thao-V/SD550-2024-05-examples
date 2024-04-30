import React, {useState} from 'react';
import './App.css';

const Footer = React.memo(function Footer(){
  console.log('Rendered Footer');
  return <p>Footer</p>
})
function App() {
  const [showHide, setShowHide] = useState(true);
  const onShowHide = () => {
    setShowHide(!showHide)
  }
  return (
    <div className="App">
      {
        showHide && <p>Hello</p>
      }
      
      <button onClick={onShowHide}>Show/Hide</button>
      <Footer/>
    </div>
  );
}

export default App;
