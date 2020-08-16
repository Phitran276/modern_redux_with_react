import React from 'react';
import logo from './logo.svg';
import './App.css';

function getButtonText(){
  return 'Click on me!';
}

function App() {
  const buttonText = {text: 'Click me'};
  const labelText = 'Enter name: ';

  return (
    <div className="App">
       <label className="label" htmlFor="name">
         {labelText}
       </label>
       <input id="name" type="text"></input>
       <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText.text}
       </button>
    </div>
  );
}

export default App;
