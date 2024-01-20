const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8080;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/user", (req, res) => {
  res.send("You're ok to proceed");
});

app.post("/admin", (req, res) => {
  console.log(req.body);
  res.send("This is a post request");
});

app.listen(PORT, console.log("Server is listening"));


// Export the Express API
module.exports = app;
