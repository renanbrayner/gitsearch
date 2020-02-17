import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from "react-dom";

/* Components */
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";


function App() {
  const [name,setName] = useState('');
  const [userName,setUserName] = useState('');
  const [followers,setFollowers] = useState('');
  const [following,setFollowing] = useState('');
  const [repos,setRepos] = useState('');
  const [avatar,setAvatar] = useState('');
  const [userInput,setUserInput] = useState('');
  const [error,setRrror] = useState(null);

  // SOMBRA DO MOUSE

    // let cursor = ReactDOM.findDOMNode(cursor);
    // document.addEventListener('mousemove',function(e) {
    //   let x = e.clientX;
    //   let y = e.clientY;
    //   cursor.style.left = x + "px";
    //   cursor.style.top = y + "px";
    // });


  return (
    <div className="app">
      <div className="cursor"></div>
      <Header />
      <Form />
      <Card />
    </div>
  );
}

export default App;
