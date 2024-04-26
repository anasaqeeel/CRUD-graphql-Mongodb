const mongoose = require('mongoose');
const Connection_STR = 'mongodb://localhost:27017/apollo';

const connectDB = async () => {
  try {
    await mongoose.connect(Connection_STR, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('MongoDB connection error >>: ', err);
  }
};
module.exports = connectDB;
