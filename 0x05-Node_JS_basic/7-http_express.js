const express = require('express');
const countStudents = require('./helper');

const app = express();
const PORT = 1245;

// Root route "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route "/students"
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  const path = process.argv[2];
  try {
    // Call the helper function to get student data
    const studentData = await countStudents(path);
    res.end(studentData);
  } catch (error) {
    // Send an error if the database can't be loaded
    res.status(500).end(error.message);
  }
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
