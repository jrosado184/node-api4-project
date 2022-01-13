const express = require("express");
const Users = require("./users-data");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUsers = await Users.addUser(req.body);
    res.json(newUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const login = await Users.login(req.body);
  res.json(login);
});

module.exports = router;
