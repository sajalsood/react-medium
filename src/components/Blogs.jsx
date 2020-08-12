import React, { useContext } from 'react';
import { AppContext } from '../App';
import { getBlogById} from '../services';

function Blogs({blogs, isAdmin}) {
    const [appState, setAppState] = useContext(AppContext);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const gotoBlog = (blogId) => {
        getBlogById(blogId)
        .then((res) => {
            setAppState({...appState, nav: (!isAdmin ? "Blog" : "Admin"), blog: res.data});
        })
        .catch((err) => {
            setAppState({...appState, error: err.message});
        });
    };

    const blogsList = blogs.map((blog) =>
        <div className="Blogs-item Grid-rows Black-card Gap-half" key={blog.blogId} data-id={blog.blogId} onClick={ (e) => gotoBlog(blog.blogId) }>
            <div>{ blog.title}</div>
            <div className="Blogs-user Grid-cols Gap-quarter">
                <div><i className="fa fa-user"></i><b> { blog.user?.username }</b></div>
                <div><i className="fa fa-clock-o"></i> { new Date(blog.timestamp).toLocaleDateString("en-US", options) }</div>
            </div>
            <div className="Blogs-text">{ blog.text }</div>
        </div>
    );

    return (
        <div className="Blogs White-card Grid-rows Gap-half">
            <h3 className="Center"><i className="fa fa-rss"></i> Recent Blog Posts</h3>
            <div className="Grid-rows Gap-one">
                { blogsList }
            </div>
        </div>
    );
}
export default Blogs;
