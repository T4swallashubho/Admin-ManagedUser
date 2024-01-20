const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

// for serving static files
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/user", (req, res) => {
  res.send("You're ok to proceed");
});

app.post("/admin", (req, res) => {
  console.log(req.body);
  res.send("This is a post request");
});

app.listen(PORT, console.log("Server is listening"));
