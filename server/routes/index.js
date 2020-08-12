const blogs = require('../blogs');
const session = require('../session');

const api = (res) => {
  return ({ message, status, data }={}) => {
    if(!message && !data) {
      data = 'OK';
    }
    res.status(status || 200).json({ message, data });
  };
};

const routes = {
  session: {},
  blogs: {
    one: {},
    all: {},
    user: {}
  },
};

routes.session.status = ( req, res ) => {
  const uId = req.cookies.uId;
  const checkSession = session.checkSession(uId);
  if(!checkSession) {
    res.clearCookie('uId');
    api(res)({status: 401, message: 'No Session Exists' });
    return;
  }
  api(res)({ data: session.getSession(uId) } );
};

routes.session.create = ( req, res ) => {
  const username = req.body.username;
  const sessionInfo = session.createSession(username);
  if(!sessionInfo) {
    api(res)({ status: 403, message: 'Login Not Authorized' });
    return;
  }
  res.cookie('uId', sessionInfo.uId, { MaxAge: 1000*60 } );
  api(res)({data: sessionInfo});
};

routes.session.remove = ( req, res ) => {
  const uId = req.cookies.uId;
  const checkSession = session.checkSession(uId);
  if(!checkSession) {
    res.clearCookie('uId');
    api(res)({status: 401, message: 'No Session Exists' });
    return;
  }
  res.clearCookie('uId');
  session.deleteSession(uId);
  api(res)();
};

routes.blogs.all.read = ( req, res ) => {
    api(res)({ data: blogs.readAllBlogs() } );
};

routes.blogs.one.read = ( req, res ) => {
    const blogId = req.params.blogId;
    const blog = blogs.readBlogById(blogId);
    if(!blog) {
      api(res)({ status: 404, message: 'Blog does not exist' });
      return;
    }
    api(res)({ data: blog } );
};

routes.blogs.user.read = ( req, res ) => {
    const uId = req.cookies.uId;
    const checkSession = session.checkSession(uId);
    if(!checkSession) {
      res.clearCookie('uId');
      api(res)({status: 401, message: 'No Session Exists' });
      return;
    }
  
    const userId = req.params.userId;
    const isAllowed = session.authenticate(userId);
    if(!isAllowed) {
      api(res)({status: 403, message: 'Unauthorized Access' });
      return;
    }

    api(res)({ data: blogs.readUserAllBlogs(userId) } );
};

routes.blogs.user.add = ( req, res ) => {
  const uId = req.cookies.uId;
  const checkSession = session.checkSession(uId);
  if(!checkSession) {
    res.clearCookie('uId');
    api(res)({status: 401, message: 'No Session Exists' });
    return;
  }

  const userId = req.params.userId;
  const isAllowed = session.authenticate(userId);
  if(!isAllowed) {
    api(res)({status: 403, message: 'Unauthorized Access' });
    return;
  }

  const blog = req.body.blog;
  api(res)({ data: {blog : blogs.addUserBlog({userId, blog})}});
};

routes.blogs.user.update = ( req, res ) => {
  const uId = req.cookies.uId;
  const checkSession = session.checkSession(uId);
  if(!checkSession) {
    res.clearCookie('uId');
    api(res)({status: 401, message: 'No Session Exists' });
    return;
  }

  const userId = req.params.userId;
  const isAllowed = session.authenticate(userId);
  if(!isAllowed) {
    api(res)({status: 403, message: 'Unauthorized Access' });
    return;
  }

  const blog = req.body.blog;
  const updatedBlog = blogs.updateUserBlog({ userId, blog });
  if(!updatedBlog) {
    api(res)({ status: 400, message: 'Blog does not exist' });
    return;
  }
  api(res)({ data: {blog : updatedBlog} } );
};

routes.blogs.user.delete = ( req, res ) => {
  const uId = req.cookies.uId;
  const checkSession = session.checkSession(uId);
  if(!checkSession) {
    res.clearCookie('uId');
    api(res)({status: 401, message: 'No Session Exists' });
    return;
  }

  const userId = req.params.userId;
  const isAllowed = session.authenticate(userId);
  if(!isAllowed) {
    api(res)({status: 403, message: 'Unauthorized Access' });
    return;
  }

  const blogId = req.params.blogId;
  const deletedBlog = blogs.deleteUserBlog({blogId});
  if(!deletedBlog) {
    api(res)({ status: 400, message: 'Blog does not exist' });
    return;
  }
  api(res)({ data: deletedBlog } );
};

module.exports = routes;