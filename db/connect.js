const mongoose = require('mongoose');

uri = "mongodb+srv://dummyuser:dummyuser123@xamtrack.xknpt1w.mongodb.net/xamtrack?retryWrites=true&w=majority"

const connectDB = () => { 
    return mongoose.connect('uri', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }); 
};


module.exports = connectDB;