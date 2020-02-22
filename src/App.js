import React, { useState, useEffect } from 'react';
import './App.css';
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
  const [error,setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then(res => res.json())
      .then(data =>{
        setData(data)
      })
  },[]);  

  const setData = ({ 
    name, 
    login, 
    followers, 
    following, 
    public_repos, 
    avatar_url
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  }

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError("Não encontrado")
          console.log(data.message)
        } else {
          setData(data);
          setError(null)
        }
      })
  }

  // Fazer enter dar submit
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSubmit()
    }
  }

  return (
    <div className="app">
      <div className="cursor"></div>
      <Header />
      <Form 
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        handleKeyPress={handleKeyPress}
      />
      { error ? (<h1 className="error">{error}</h1>) : (
              <Card
              name = {name}
              login = {userName}
              followers = {followers}
              following = {following}
              repos = {repos}
              avatar = {avatar}
            />
       ) }
    </div>
  );
}

export default App;
