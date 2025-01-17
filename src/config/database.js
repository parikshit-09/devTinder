const mongoose = requrie("mongoose");
require("./config/mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://parikshitrathor:<db_password>@learncluster.evrvv.mongodb.net/?retryWrites=true&w=majority&appName=learncluster"
  );
};

module.exports = connectDB;
