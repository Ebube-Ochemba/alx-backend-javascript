const http = require('http'); // Import the HTTP module

const PORT = 1245;

// Create the server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response body
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Export the app
module.exports = app;
