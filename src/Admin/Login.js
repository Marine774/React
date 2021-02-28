import React, { useState } from "react";
import { Link, Redirect, Router, Route } from "react-router-dom";
import axios from 'axios';
import { Card, Logo, Form, Input, Button, Error } from "./AuthForms";
import { useAuth } from "./Auth";
import Admin from "./Admin";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  // function postLogin() {
  //   axios.get("https://my-json-server.typicode.com/Marine774/ApiFilms/login", {
  //     username,
  //     password 
  //   }).then(result => {
      
    
  //     if (result.status === 200 ) {
        
  //       setAuthTokens(result.data);
  //       alert ('donne api '+ result.data)
  //       alert('donne champs : '+username + password)
  //       alert(isAllowed(result,password, username));
  //       if(isAllowed(result,password, username)){
  //         setLoggedIn(true);
  //         alert('c\' bon');
  //       }else{
  //         alert('pas bon');
  //         setIsError(true);
  //       }
  //     } else {
  //       setIsError(true);
  //     }
  //   }).catch(e => {
  //     setIsError(true);
  //   });
    
  // }

  function postLogin () {
     axios.get("https://my-json-server.typicode.com/Marine774/ApiFilms/login") 
      .then(function (response) { 
        setAuthTokens(response.data);
        if(isAllowed(response,password, username)){
            setLoggedIn(true);
        }else{
            setIsError(true);
        }
      }) 
      .catch(function (error) {
        setIsError(true);
      });
  }

  function isAllowed(response,password,username){
    for(var i = 0; i<=response.data.length;i++){
      if((username == response.data[i].username) && (password == response.data[i].password)){
        return true;
      }
    }
    return false;
  }



  if (isLoggedIn) {
    const referer = props.location.state.referer || '/';
    return <Redirect to={referer} />;
  }

  return (
    <div class="login">

        <h3>Connexion à la partie administrateur</h3><br></br>
        <div class="card bg-dark text-white">
          <div class="card-body">
            <p>Username : <b>admin</b></p>
            <p>Password : <b>admin</b></p>
          </div>
        </div><br></br>

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Username"  value={username}  onChange={e => { setUserName(e.target.value);
          }}></input>
        </div>
        <div class="input-group mb-3">
           <input type="text" class="form-control" placeholder="Password"  value={password}  onChange={e => { setPassword(e.target.value);
          }}></input>
        </div>
      
          <button class="m-3 p-2 btn btn-sm btn-secondary" onClick={postLogin}>Connexion</button>
   
     
        { isError &&<Error>Le nom ou le mot de passe est incorrect</Error> }

    </div>
  );
}

export default Login;