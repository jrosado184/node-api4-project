const express = require("express");
const router = require("./api/users-router");

const server = express();

server.use(express.json());
server.use("/api/users", router);

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = server;
