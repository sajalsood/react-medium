const serve = (response) => {
    if(!response.ok){
        return response.json().then(err => Promise.reject(err));
    }
    return response.json();
};

export const getSession = () =>{
    return fetch('/session',{
        method:'GET',
      })
      .catch( (error) => error.json().then(err => Promise.reject(err.message)))
      .then( (response) => {
        return serve(response);
    });
}

export const createSession = (username) => {
    return fetch('/session',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username }),
    })
    .catch( (error) => error.json().then(err => Promise.reject(err.message)))
    .then( (response) => {
        if(!response.ok){
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    });
}

export const deleteSession = () => {
    return fetch('/session', {
        method: 'DELETE',
    })
    .catch( (error) => error.json().then(err => Promise.reject(err.message)))
    .then( (response) => {
        if(!response.ok){
            return response.json().then(err => Promise.reject(err));
        }
        return;
    });
}

export const getAllBlogs = () => {
    return fetch(`/blogs`, {
        method: 'GET'
    })
    .catch( (error) => error.json().then(err => Promise.reject(err.message)))
    .then( (response) => {
        return serve(response);
    });
}

export const getBlogById = (blogId) => {
    return fetch(`/blogs/${blogId}`, {
        method: 'GET'
    })
    .catch( (error) => error.json().then(err => Promise.reject(err.message)))
    .then( (response) => {
        if(!response.ok){
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    });
}

export const getUserAllBlogs = (userId) => {
    return fetch(`/blogs/user/${userId}`, {
        method: 'GET'
    })
    .catch( (error) => error.json().then(err => Promise.reject(err.message)))
    .then( (response) => {
        if(!response.ok){
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    });
}

export const createBlog = (userId, blog) => {
    return fetch(`/blogs/user/${userId}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({blog: blog})
    })
    .catch( (error) => error.json().then(err => Promise.reject(err.message)))
    .then( (response) => {
        if(!response.ok){
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    });
};

export const updateBlog = (userId, blog) => {
    return fetch(`/blogs/user/${userId}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({blog: blog})
    })
    .catch( (error) => error.json().then(err => Promise.reject(err.message)))
    .then( (response) => {
        if(!response.ok){
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    });
};

export const deleteBlog = (userId, blogId) => {
    return fetch(`/blogs/user/${userId}/${blogId}`,{
        method: 'DELETE',
    })
    .catch( (error) => error.json().then(err => Promise.reject(err.message)))
    .then( (response) => {
        if(!response.ok){
            return response.json().then(err => Promise.reject(err));
        }
        return response.json();
    });
};
