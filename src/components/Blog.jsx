import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import { getSession, getBlogById} from '../services';

function Blog() {
  const [appState, setAppState] = useContext(AppContext);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  useEffect(() => {
    getSession()
    .then((res) => {
      setAppState({...appState, loggedIn: true, username: res.data.username, 
        userId: res.data.userId});
    })
    .catch(() => {
      setAppState({...appState, loggedIn: false});
    });
    getBlog();
  }, []);

  const getBlog = () => {
    getBlogById(appState.blog.blogId)
    .then((res) => {
      setAppState({...appState, blog: res.data});
    })
    .catch((err) => {
      setAppState({...appState, error: err.message});
    });
  };

  return (
    <div className="Blog Grid-rows Gap-one">
      <div className="Blog-item White-card Grid-rows Gap-one">
        <div>{ appState.blog.title}</div>
        <div className="Blogs-user Grid-cols Gap-quarter">
            <div><i className="fa fa-user"></i><b> { appState.blog.user?.username }</b></div>
            <div><i className="fa fa-clock-o"></i> { new Date(appState.blog.timestamp).toLocaleDateString("en-US", options) }</div>
        </div>
      </div>
      <div className="Blog-item-text White-card">
        <div>{ appState.blog.text }</div>
      </div>
    </div>
  );
}

export default Blog;