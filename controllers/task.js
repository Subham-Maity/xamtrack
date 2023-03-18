const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  const { priority, status } = req.query;
  const queryObject = {};

  if (priority) {
    queryObject.priority = priority;
  }

  if (status) {
    queryObject.status = status;
  }

  console.log(queryObject);

  const myData = await Task.find(queryObject);

  res.status(200).json({ myData });
};

const getAllTasksTesting = async (req, res) => {
  const myData = await Task.find(req.query);

  res.status(200).json({ myData });
};

module.exports = {
  getAllTasks,
  getAllTasksTesting,
};
