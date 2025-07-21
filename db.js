const mongoose = require('mongoose');
require('dotenv').config(); 

// Get the MongoDB URL from environment variables
const mongoURL = process.env.MONGODB_URL;

if (!mongoURL) {
  console.error('❌ MONGODB_URL is not defined in .env file');
  process.exit(1); // Stop the app if no DB URL is provided
}

// Connect to MongoDB with SSL enforced
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // ✅ Ensure TLS is used (needed for Atlas)
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners for the database connection
db.on('connected', () => {
  console.log('✅ Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('❌ Error connecting to MongoDB:', err.message);
});

db.on('disconnected', () => {
  console.log('⚠️ Disconnected from MongoDB');
});

// Optional: Handle app termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('🔌 MongoDB connection closed due to app termination');
  process.exit(0);
});

// Export the database connection
module.exports = db;
