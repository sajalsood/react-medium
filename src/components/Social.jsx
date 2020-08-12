import React, { useState, useContext, useRef } from 'react';
import { AppContext } from '../App';
import { getSession } from '../services';

function Social() {
  const [appState, setAppState] = useContext(AppContext);

  const gotoAdmin = () => {
    getSession()
    .then((res) => {
      setAppState({...appState, loggedIn: true, nav:"Admin", 
      username: res.data.username, userId: res.data.userId});
    })
    .catch(() => {
      setAppState({...appState, loggedIn: false, nav: "Login"});
    });
  };
  
  return (
    <div className="Social White-card Grid-cols Gap-one">
      <div><b>&copy; Copyright 2020 </b></div>
      <div className="Social-icons Grid-cols Gap-one">
        <div><i className="fa fa-linkedin"></i></div>
        <div><i className="fa fa-facebook"></i></div>
        <div><i className="fa fa-twitter"></i></div>
        <div><i className="fa fa-github"></i></div>
      </div>
      <div>
          <button className="Btn Btn-success" onClick={ gotoAdmin }>
            <i className="fa fa-unlock"></i> Admin</button>
      </div>
    </div>
  );
}
export default Social;
