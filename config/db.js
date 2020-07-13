const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); //Connect to the database; await as mongoose.connect returns a promise
    console.log('MongoDB Connected');
  } catch (err) {
    //If it can't connect
    console.error(err.message); //If error occurs, print out the error message
    process.exit(1); //Exit process with failure
  }
};

module.exports = connectDB; //Export connectDB function
