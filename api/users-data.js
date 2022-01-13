const { nanoid } = require("nanoid");

function getId() {
  return nanoid().slice(0, 5);
}

const users = [
  { id: getId(), username: "javier", password: "admin" },
  { id: getId(), username: "laysha", password: "admin" },
  { id: getId(), username: "javielito", password: "user" },
];

function getUsers() {
  return users;
}

function addUser({ username, password }) {
  const newUsers = { id: getId(), username, password };
  users.push(newUsers);
  return Promise.resolve(newUsers);
}

function login(users) {
  const user = { username: users.username };
  if (users.username !== user.username) {
    return Promise.resolve(`welcome ${user.username}`);
  } else {
    return Promise.resolve("error");
  }
}

module.exports = {
  getUsers,
  addUser,
  login,
};
