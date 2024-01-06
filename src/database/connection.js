const mongoose = require("mongoose");
require("dotenv").config();

const connectionToDatabase = async () => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.culbnn3.mongodb.net/UserData?retryWrites=true&w=majority`
      )
      .then(console.log("Connected to database!"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectionToDatabase;
