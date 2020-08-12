const users = require('./users');
const sessions = {};

const checkSession = (uId) => {
  if(!uId || !sessions[uId] || sessions[uId].expires < Date.now() ) {
    return false;
  }
  return true;
}

const createSession = (username) => {
  if(!username || !username.trim() || !username.match(/^[A-Za-z0-9_-]{2,20}$/) || username.toLowerCase().includes("dog")) {
    return false;
  }

  const user = users.getUser(username.toLowerCase());
  const uId = user.userId;
  sessions[uId] = {
    ...user,
    uId,
    expires: Date.now() + 1000*60*5,
  };
  return sessions[uId];
};

const getSession = (uId) => {
  return sessions[uId];
};

const deleteSession = (uId) => {
  delete sessions[uId];
};

const authenticate = (uId) => {
  if(!uId || !sessions[uId] || !sessions[uId].userId === uId) {
    return false;
  }
  return true;
};

module.exports =  {
    checkSession,
    createSession,
    getSession,
    deleteSession,
    authenticate,
};