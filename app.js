//dotenv config
require('dotenv').config()

const express = require("express");
// const app = express();
const connectDB = require('./db/connect');

// Port
const PORT = process.env.PORT || 5000;

// Importing the routes
const tasks_routes = require("./routes/task");

// Home Page
app.get("/", (req, res) => {
  res.send("Subham's Home Page");
});

//middleware or to set router

app.use("/api/tasks" , tasks_routes);

// Async Function
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Call the start function to start the server
start();
