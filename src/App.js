import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

  return (
    <div className="app">
      <Header />
      <Form />
      <Card />
    </div>
  );
}

export default App;
