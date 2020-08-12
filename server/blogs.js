const { v4: uuidv4 } = require('uuid');
const users = require('./users');
const sample = require('./sample');

let blogs = sample.blogs;

const readAllBlogs = () => {
    if(!blogs){
       return [];
    }
    return blogs.map(function(r) {
        r.user = users.getUserById(r.userId);
        return r;
    }).sort((a, b) => b.timestamp - a.timestamp);
};

const readBlogById = (blogId) => {
    if(!blogs.some(r => r.blogId === blogId)) {
        return false;
    }

    const blog = blogs.find(r => r.blogId === blogId);
    blog.user = users.getUserById(blog.userId);
    return blog;
};

const readUserAllBlogs = (userId) => {
    if(!blogs.some(r => r.userId === userId)) {
        return [];
    }
    return blogs.filter(r => r.userId === userId).map(function(r) {
        r.user = users.getUserById(r.userId);
        return r;
    }).sort((a, b) => b.timestamp - a.timestamp);
};

const addUserBlog = ({userId, blog}) => {
    const newBlog = {
        blogId: uuidv4(),
        title: blog.title, 
        text: blog.text, 
        userId: userId, 
        timestamp: new Date()
    };

    blogs.push(newBlog);
    newBlog.user = users.getUserById(userId);
    return newBlog;
};

const updateUserBlog = ({userId, blog}) => {
    if(!blogs.find(r => r.userId === userId && r.blogId === blog.blogId)) {
        return false;
    }

    blogs = blogs.map((r) => {
        if(r.userId === userId && r.blogId === blog.blogId) {
            r.title = blog.title; 
            r.text = blog.text;
            r.timestamp = new Date();
        }
        return r;
    });

    const updatedBlog = blogs.find(r => r.blogId === blog.blogId);
    updatedBlog.user = users.getUserById(userId);
    return updatedBlog;
};

const deleteUserBlog = ({blogId}) => {
    const index = blogs.findIndex(r => r.blogId === blogId);
    if(index === -1) {
        return false;
    }

    blogs.splice(index, 1);
    return true;
};

module.exports = {
  readAllBlogs,
  readBlogById,
  readUserAllBlogs,
  addUserBlog,
  updateUserBlog,
  deleteUserBlog
};