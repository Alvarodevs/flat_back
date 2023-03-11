const mongoose = require("mongoose");
require("dotenv").config();

const user = process.env.DB_USER
const pass = process.env.DB_PASS
const cluster = process.env.DB_CLUSTER
const dbName = process.env.DB_NAME_DEV
const mongoStr = `mongodb+srv://${user}:${pass}@${cluster}/${dbName}`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
