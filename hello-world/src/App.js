import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './Components/greets'
import  Welcome  from './Components/welcome'
import  Message from  './Components/message'
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
    <Counter/>
    {/* <Greet name= "Bavi"/>
    <Greet name= "Praveen"/>

    <Welcome name= "thra"/>
      <Message/> */}
    </div>
  );
}

export default App;
