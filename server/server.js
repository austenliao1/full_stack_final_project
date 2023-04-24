const express = require("express");
const user = require("./routes/user");
const spoonacular = require("./routes/spoonacular")
const InitiateMongoServer = require("./config/db");
const cors = require("cors");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// /**
//  * Router Middleware
//  * Router - /user/*
//  * Method - *
//  */
app.use("/user", user);
app.use("/spoonacular", spoonacular);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
