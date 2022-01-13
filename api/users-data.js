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

module.exports = {
  getUsers,
  addUser,
};
