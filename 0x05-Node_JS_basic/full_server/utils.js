// A function that reads a database asynchronously

const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    // read database, then format & cleanup data
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n').filter((line) => line !== '');

    // check for valid data
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // remove database header line
    const students = lines.slice(1);

    // Object to store students grouped by field
    const fieldData = {};

    // Loop through each student row and group by field
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!fieldData[field]) {
        fieldData[field] = [];
      }
      fieldData[field].push(firstname);
    });

    return fieldData;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
