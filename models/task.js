// task.js

// import mongoose module
const mongoose = require('mongoose');

// define the task schema
const taskSchema = new mongoose.Schema({
    // id is a string that identifies the task uniquely
    // it is required and cannot be duplicated
    id: {
       type: String,
       required: [true, "Please provide an id for the task."],
       trim: true,
       unique: true
    },
    // keep description as it is
    // description is a string that gives more details about the task
    // it is required and trimmed to remove extra whitespace
    description: {
       type: String,
       required: true,
       trim: true
    },
    // replace completed with status and make it an enum
    // status is a string that indicates whether the task is completed or incomplete
    // it can only have one of the two values specified in the enum option
    // by default, it is set to incomplete
    status: {
       type: String,
       enum: ['completed', 'incomplete'],
       default: 'incomplete'
    },
    
    // keep priority as it is
    // priority is a string that indicates how urgent the task is 
    // it can only have one of the four values specified in the enum option 
    // by default, it is set to medium 
    // if an invalid value is provided, a custom error message will be thrown 
   
   priority: {
      type : String,
      enum : ['low', 'medium', 'high' , 'urgent'],
      default : 'medium',
      message : '{VALUE} is not supported'
   },

   // keep dueDate as it is 
   // dueDate is a date that specifies when the task should be completed by 
   // it has a custom validator function that checks if the due date is after or equal to the creation date 
   // if not, an error message will be thrown 

   dueDate : {
     type : Date,
     validate : {
        validator : function(value) {
          return value >= this.createdAt;
        },
        message : 'Due date must be after creation date.'
     }
  },

  // keep owner as it is 
  // owner is an object id that references another model called User 
  // it indicates who created or owns the task 
  // it is required for every task document 

  owner : {
     type : mongoose.Schema.Types.ObjectId,
     ref : 'User',
     required : true
  }
 }, { timestamps : true }) 

// enable timestamps option to create createdAt and updatedAt fields automatically 
// this option tells mongoose to add two fields to each document:
// createdAt - a date that indicates when the document was created 
// updatedAt - a date that indicates when the document was last modified 
// these fields are managed by mongoose and do not need to be defined in the schema

// export the task model using mongoose.model() method 
// this method takes two arguments:
// -the name of the model (Task) which should match with its collection name (tasks) in MongoDB  
// -the schema object (taskSchema) which defines its structure and behavior 

module.exports = mongoose.model('Task', taskSchema)