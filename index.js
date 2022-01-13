const express = require("express");

const server = express();

server.get("/hello", (req, res) => {
  res.json("helllllllllo");
});

server.listen(process.env.PORT || 9000);
