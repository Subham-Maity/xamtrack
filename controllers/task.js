const Task = require('../models/Task');

const getAllTasks = async(req, res) => {

   const {priority} = req.query;
   const queryObject = { };

   if(priority) {
        queryObject.priority = priority;
        console.log(queryObject.priority);
    }

  const myData = await Task.find(queryObject);

    res.status(200).json({ myData });
  };

const getAllTasksTesting = async(req, res) => {
    const myData = await Task.find(req.query);

    res.status(200).json({ myData });
  };

module.exports = {
    getAllTasks,
    getAllTasksTesting
  };