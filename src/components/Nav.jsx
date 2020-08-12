import React, { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../App';
import { deleteSession } from '../services';

function Nav() {
  const [appState, setAppState] = useContext(AppContext);

  const gotoHome = () => {
    setAppState({...appState, nav: "Home"});
  };

  const gotoAdmin = () => {
    setAppState({...appState, nav: "Admin"});
  };

  const gotoLogout = () => {
    deleteSession()
    .then(() => {
      setAppState({...appState, nav: "Login", loggedIn: false, 
      blog: undefined, userId: undefined, username: undefined});
    })
    .catch((err) => {
      setAppState({...appState, error: err.message});
    });
  };
  
  return (
    <div class="Nav">
      <a href="javascript:void(0);" onClick= { gotoHome }><i className="fa fa-home"></i> Home</a>
      {
        appState.loggedIn && appState.nav !== "Admin" && <a href="javascript:void(0);" onClick= { gotoAdmin }><i className="fa fa-users"></i> Admin</a>
      }
      {
        appState.loggedIn && <a className="logout" href="javascript:void(0);" onClick= { gotoLogout }><i className="fa fa-sign-out"></i> Logout</a>
      }
      {
        appState.loggedIn && <p className="welcome"><i className="fa fa-user-o"></i> Hello, { appState.username}</p>
      }
    </div>
  );
}

export default Nav;
