const dotenv = require("dotenv").config()
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/heroku", (req, res) => {
  res.sendFile(__dirname + "/pages/heroku.html");
});

app.get("/github", (req, res) => {
  res.sendFile(__dirname + "/pages/github.html");
});

app.get("/sammenligning", (req, res) => {
  res.sendFile(__dirname + "/pages/sammenligning.html");
});

app.listen(process.env.PORT||3000, () => {
  console.log("Server running on port 3000");
});
