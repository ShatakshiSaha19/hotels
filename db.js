const mongoose =require('mongoose');
require('dotenv').config(); 

//Define  the MongoDB connection URL
//const mongoURL ='mongodb://localhost:27017/hotels'//replace "mydatabase" with your database name
//Set up the connection to MongoDB

 const mongoURL =process.env.MONGODB_URL;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })

//Get the default connection
//mongoose maintains a default connection object representing the mongoDB connection
const db=mongoose.connection;

//Define event listeners for the database connection

db.on('connected', () => {
  console.log('Connected to MongoDB');
});
db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

//Export the database connection
module.exports = db;
