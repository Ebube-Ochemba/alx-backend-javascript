const express = require('express'); // Import the Express module

const PORT = 1245;
const app = express(); // Create an Express application

// Define a route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Send a plain text response
});

// Make the server listen on port 1245
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Export the app
module.exports = app;
