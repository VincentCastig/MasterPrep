// index.js

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express application
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to MasterPrep - Your Ultimate Interview Preparation App!');
});

// Define a route to handle mock interview requests
app.post('/mock-interview', (req, res) => {
  const { interviewer, interviewee, questions } = req.body;
  // Here you can implement logic to conduct a mock interview
  // For demonstration purposes, we'll simply echo back the received data
  res.json({ interviewer, interviewee, questions });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
