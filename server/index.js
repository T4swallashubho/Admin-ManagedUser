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

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// for serving static files
app.use(express.static(path.join(__dirname, "public")));

// Set HTML engine**
app.engine("html", require("ejs").renderFile);

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/accessAdmin", (req, res) => {
  res.render("User.html");
});

app.post("/admin", async (req, res) => {
  const user = await Admin.findOne({ username: req.body.username });

  if (user) {
    const password = await bcrypt.compare(req.body.password, user.password);
    password ? res.redirect("/accessAdmin") : res.redirect("/");
  } else {
    res.send(403, "Authentication Failed");
  }
});

app.listen(PORT, console.log("Server is listening"));

app.use((err, req, res, next) => {
  console.log(err);
  next(err);
});
