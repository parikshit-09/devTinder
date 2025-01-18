const express = require("express");
const connectDB = require("./config/mongoose");
const app = express();
const User = require("../models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Pariksit",
    lastName: "Rathor",
    password: "parishit@123",
    gender: "male",
  });
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400), send("Error saving the data:" + err.message);
  }
});
connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(7777, () => {
      console.log("server is listening on port 7777");
    });
  })
  .catch((err) => {
    console.error("server connection error");
  });
