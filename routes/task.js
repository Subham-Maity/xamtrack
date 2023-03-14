
//Importing the express module and creating a router 

const express = require('express');

const router = express.Router();

// Importing the getAllTasks function from the controllers/task.js file
const { 
    getAllTasks, 
    getAllTasksTesting 
} = require('../controllers/task');

//route to get all tasks
router.route('/').get(getAllTasks);
router.route('/testing').get(getAllTasksTesting);

//Exporting the router object.
module.exports = router;

