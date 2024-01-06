const mongoose = require("mongoose");
require("dotenv").config();

const connectionToDatabase = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_CONNECT_URI)
      .then(() => console.log("Connected to database!"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectionToDatabase;
