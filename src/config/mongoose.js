const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://parikshitrathor:parisep09@learncluster.evrvv.mongodb.net/?retryWrites=true&w=majority&appName=learncluster"
  );
};

module.exports = connectDB;
