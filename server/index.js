const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const Admin = require("./models/Admin.model");
const bcrypt = require("bcryptjs");
require("./mongoose/connection");

dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

// for serving static files
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

app.get("/accessAdmin", (req, res) => {
  res.sendFile("User.html", { root: path.join(__dirname, "public") });
});

app.post("/admin", async (req, res) => {
  const user = await Admin.findOne({ username: req.body.username });

  if (user) {
    const password = await bcrypt.compare(user.password, req.body.password);
    password ? res.redirect("/accessAdmin") : res.redirect("/");
  } else {
    res.send(403, "Authentication Failed");
  }
});

app.listen(PORT, console.log("Server is listening"));
