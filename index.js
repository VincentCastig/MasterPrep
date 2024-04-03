// index.js

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module

// Create an instance of Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.static('views'));

// Define routes
app.get('/', (req, res) => {
 // Absolute path to your HTML file
 const htmlFilePath = path.join(__dirname, 'views', 'hiring-manager.html');
  
 // Send the HTML file as a response
 res.sendFile(htmlFilePath);
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
