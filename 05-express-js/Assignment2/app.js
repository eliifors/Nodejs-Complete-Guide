const http = require("http");

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("Hello from My Assignemnt2!");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("middleware for /users");
  res.send("<h1>Hello from Users to Section!</h1>");
});

app.listen(3001);
