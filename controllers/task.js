const Task = require('../models/Task');

const getAllTasks = async(req, res) => {
   const myData = await Task.find({});

    res.status(200).json({ myData });
  };

const getAllTasksTesting = async(req, res) => {
    const myData = await Task.find({status: "incomplete"});
    res.status(200).json({ myData });
  };

module.exports = {
    getAllTasks,
    getAllTasksTesting
  };