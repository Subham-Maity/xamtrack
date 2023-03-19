const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  const { priority, status, description, sort, select } = req.query;
  const queryObject = {};

  if (priority) {
    queryObject.priority = { $regex: priority, $options: "i" };
  }

  if (status) {
    queryObject.status = { $regex: status, $options: "i" };
  }

  if (description) {
    queryObject.description = { $regex: description, $options: "i" };
  }

  let apiData = Task.find(queryObject);

  if (sort) {
    let sortProblem = sort.replace(",", " ");
    apiData = apiData.sort(sortProblem);
  }

  if (select) {
    let selectProblem = select.split(",").join(" ");
    apiData = apiData.select(selectProblem);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  //formula for skipping
  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  console.log(queryObject);

  const myData = await apiData;

  res.status(200).json({ myData, nbHits: myData.length });
};






const getAllTasksTesting = async (req, res) => {
  const myData = await Task.find(req.query).skip(2);

  res.status(200).json({ myData });
};

module.exports = {
  getAllTasks,
  getAllTasksTesting,
};
