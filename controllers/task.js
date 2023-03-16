const Task = require('../models/Task');

const getAllTasks = async(req, res) => {
  const myData = await Task.find(req.query);

    res.status(200).json({ myData });
  };

const getAllTasksTesting = async(req, res) => {
    const myData = await Task.find(req.query);

    console.log("User searched for: ", req.query);

    res.status(200).json({ myData });
  };

module.exports = {
    getAllTasks,
    getAllTasksTesting
  };