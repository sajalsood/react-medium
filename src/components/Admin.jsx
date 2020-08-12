import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';
import Blogs from  '../components/Blogs';
import Blog from  '../components/Blog';
import { getSession, getUserAllBlogs, deleteBlog } from '../services';

function Admin() {
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
    getUserAllBlogs(appState.userId)
    .then((res) => {
      setBlogs(res.data);
      if(res.data.length > 0) {
        if(!res.data.some((r) => r.blogId === appState.blog?.blogId)){
          setAppState({...appState, blog: res.data[0]});
        }
      }
      else {
        setAppState({...appState, blog: undefined});
      }
    })
    .catch((err) => {
      setAppState({...appState, error: err.message});
    });
  };

  const createNewUserBlog = () => {
    setAppState({...appState, nav: "AddEditBlog", isNewBlog: true});
  };

  const editUserBlog = () => {
    setAppState({...appState, nav: "AddEditBlog", isNewBlog: false});
  };

  const deleteUserBlog = () => {
    deleteBlog(appState.userId, appState.blog.blogId)
    .then(() => {
      setAppState({...appState, blog: undefined});
      getBlogs();
    })
    .catch((err) => {
      setAppState({...appState, error: err.message});
    });
  };

  return (
    <div>
      {
        blogs.length > 0 &&
        <div className="Admin Grid Gap-one">
          <Blogs blogs={ blogs } isAdmin= { true } /> 
          <div className="Admin-area Grid-rows Gap-one">
              <div className="Admin-menu Black-card Grid-cols Gap-one">
                <div onClick= { editUserBlog }><i className="fa fa-pencil"></i> Edit</div>
                <div onClick= { deleteUserBlog }><i className="fa fa-trash"></i> Delete</div>
                <div onClick= { createNewUserBlog }><i className="fa fa-plus"></i> New</div>
              </div>
              { appState.blog && <Blog/> }
          </div>
        </div>
      }
      {
        blogs.length === 0 &&
        <h3>
          <center>
            Click <span className="Link-new" onClick= { createNewUserBlog }>here</span> to create a new blog.
          </center>
        </h3>
      }
    </div>
  );
}

export default Admin;
