
//Importing the express module and creating a router 

const express = require('express');

const router = express.Router();

//route to get all tasks
router.route('/').get(getAllTasks);
router.route('/testing').get(getAllTasksTesting);

//Exporting the router object.
module.exports = router;

