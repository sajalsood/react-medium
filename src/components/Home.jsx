import React, { useState, useEffect, useContext} from 'react';
import { AppContext } from '../App';
import Profile from  '../components/Profile';
import Blogs from  '../components/Blogs';
import Social from  '../components/Social';
import { getSession, getAllBlogs } from '../services';

function Home() {
  const [appState, setAppState] = useContext(AppContext);
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    getSession()
    .then((res) => {
      setAppState({...appState, loggedIn: true, username: res.data.username, 
        userId: res.data.userId});
    })
    .catch(() => {
      setAppState({...appState, loggedIn: false});
    });
    getBlogs();
  }, []);

  const getBlogs = () => {
    getAllBlogs()
    .then((res) => {
        setBlogs(res.data.slice(0, 4));
    })
    .catch((err) => {
      setAppState({...appState, error: err.message});
    });
  };

  return (
    <div className="Grid-rows Gap-one">
      <div className="Home-body Grid Gap-one">
        <Profile />
        <Blogs blogs={ blogs } /> 
      </div>
      <div className="Home-footer">
        <Social />
      </div>
    </div>
  );
}

export default Home;
