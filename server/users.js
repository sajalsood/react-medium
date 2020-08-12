const { v4: uuidv4 } = require('uuid');
const sample = require('./sample');
const users = sample.users;

const getUser = (username) => {
  if(!users[username]) {
    const userId = uuidv4();
    users[username] = { userId, username };
  }
  return users[username];
};

const getUserById = (userId) => {
  if(!Object.values(users).some(r => r.userId === userId)) {
    return {};
  }

  return Object.values(users).find(r => r.userId === userId);
};

module.exports = {
    getUser,
    getUserById
};