const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8080;

app.use(cors());

app.get("/user", (req, res) => {
  res.send("You're ok to proceed");
});

app.listen(PORT, console.log("Server is listening"));
