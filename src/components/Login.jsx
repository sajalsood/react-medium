import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import { createSession } from '../services';

function Login() {
  const [appState, setAppState] = useContext(AppContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const gotoAdmin = () => {
    if(!username || !username.trim()) {
      setAppState({...appState, error: "Username is required."});
      return;
    }

    if(!password || !password.trim()) {
      setAppState({...appState, error: "Password is required."});
      return;
    }

    createSession(username)
    .then((res) => {
      setAppState({...appState, nav: "Admin", loggedIn: true, 
      username: res.data.username, userId: res.data.userId});
    })
    .catch((err) => {
      setAppState({...appState, error: err.message});
    });
  };

  return (
    <div className="Login Grid-cols Gap-one">
        <div className="Grid White-card Gap-one">
          <div className="Login-pic">
              <i className="fa fa-user-circle Login-logo"></i>
          </div>
          <div className="Login-info Grid-rows">
             <label for="username">Username<span className="Info-danger">*</span></label>
             <input type="text" id="username" onChange={ (e) => setUsername(e.target.value) } className="Form-control" placeholder="Enter username here"/>
             
             <label for="password">Password<span className="Info-danger">*</span></label>
             <input type="password" id="password" onChange={ (e) => setPassword(e.target.value) } className="Form-control" placeholder="Enter password here"/>
             
             <button className="Btn Btn-success" onClick= { gotoAdmin }><i className="fa fa-sign-in"></i> Login</button>
          </div>
        </div>
    </div>
  );
}

export default Login;
