import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div>
      <h1>My name is {props.name}</h1>
      <h1>My gender is {props.gender}</h1>
      </div>
    </div>
  );
}

export default App;
