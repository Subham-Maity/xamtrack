require("dotenv").config();
const connectDB = require("./db/connect");
const Task = require("./models/task");
const tasksJSON = require("./tasks.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Task.create(tasksJSON);
    console.log("Tasks created successfully");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
