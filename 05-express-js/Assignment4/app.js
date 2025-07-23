const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const users = [];

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});

app.use("/users", (req, res, next) => {
  res.render("users", { pageTitle: "Users", users: users });
});

app.use("/add-user", (req, res, next) => {
  users.push(req.body.username);
  res.redirect("/users");
});

app.use((req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
  });
});

app.listen(3001);
