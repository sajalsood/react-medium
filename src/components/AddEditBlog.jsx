import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { getSession, createBlog, updateBlog} from '../services';

function AddEditBlog() {
  const [appState, setAppState] = useContext(AppContext);
  const [blog, setBlog] = useState({title: '', text: ''});

  useEffect(() => {
    getSession()
    .then((res) => {
      setAppState({...appState, loggedIn: true, username: res.data.username, 
        userId: res.data.userId});
      if(appState.blog && !appState.isNewBlog) {
        setBlog(appState.blog);
      }
    })
    .catch(() => {
      setAppState({...appState, nav: "Home", loggedIn: false});
    });
  }, []);

  const cancelAddEditBlog = () => {
    setAppState({...appState, nav: "Admin"});
  };

  const saveBlog = () => {
    if(!blog.title || !blog.title.trim()) {
      setAppState({...appState, error: "Please enter a valid blog title."});
      return;
    }

    if(!blog.text || !blog.text.trim()) {
      setAppState({...appState, error: "Please enter a valid blog text."});
      return;
    }

    if(appState.isNewBlog) {
      createBlog(appState.userId, blog)
      .then((res) => {
        setAppState({...appState, nav:"Admin", blog: res.data.blog});
      })
      .catch((err) => {
        setAppState({...appState, error: err.message});
      });
    }
    else {
      updateBlog(appState.userId, blog)
      .then((res) => {
        setAppState({...appState, nav:"Admin", blog: res.data.blog});
      })
      .catch((err) => {
        setAppState({...appState, error: err.message});
      });
    }
  };

  return (
    <div className="AddEditBlog White-card Grid-rows Gap-one">
       <div className="AddEditBlog-menu Black-card Grid-cols Gap-one">
            <div onClick= { saveBlog }><i className="fa fa-floppy-o"></i> Save</div>
            <div onClick= { cancelAddEditBlog }><i className="fa fa-arrow-left"></i> Cancel</div>
        </div>

      <div className="Grid-rows">
        <label for="title">Title<span className="Info-danger">*</span></label>
        <input id="title" defaultValue={blog.title} onKeyUp={ (e) => { setBlog({...blog, title: e.target.value}) }} className="Form-control" placeholder="Enter title here"/>
      </div>

      <div className="Grid-rows">
        <label for="text">Text<span className="Info-danger">*</span></label>
        <textarea id="text" rows="18" defaultValue={blog.text} onKeyUp={ (e) => { setBlog({...blog, text: e.target.value}) }} className="Form-control" placeholder="Enter text here"/>
      </div>
    </div>
  );
}

export default AddEditBlog;