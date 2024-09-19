const http = require('http');
const url = require('url'); // Import the URL module to parse request URLs
const countStudents = require('./helper'); // Import the async countStudents function

const PORT = 1245;

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    // Handle root endpoint "/"
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    // Handle "/students" endpoint
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Extract the path to the database from the command line arguments
    const databasePath = process.argv[2];

    try {
      // Call the countStudents function and await its result
      const studentsList = await countStudents(databasePath);
      res.end(studentsList);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    // Handle unknown endpoints
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
