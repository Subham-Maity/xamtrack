
const getAllTasks = async(req, res) => {
    res.status(200).json({ msg: 'Show all tasks' });
  };

const getAllTasksTesting = async(req, res) => {
    res.status(200).json({ msg: 'Show all tasks testing' });
  };

module.exports = {
    getAllTasks,
    getAllTasksTesting
  };