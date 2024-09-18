const fs = require('fs');

function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the data by newlines and remove any empty lines
    const lines = data.trim().split('\n').filter((line) => line !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Extract the header and the rows (skipping the first line, which is the header)
    const students = lines.slice(1);

    // Total number of students
    console.log(`Number of students: ${students.length}`);

    // Object to store students grouped by field
    const fieldData = {};

    // Loop through each student row and group by field
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!fieldData[field]) {
        fieldData[field] = [];
      }

      // Add the student's firstname to the appropriate field group
      fieldData[field].push(firstname);
    });

    // Log the number of students and the list for each field
    for (const field in fieldData) {
      if (Object.hasOwnProperty.call(fieldData, field)) {
        const studentsInField = fieldData[field];
        console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
      }
    }
  } catch (error) {
    // Handle the case where the file could not be read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
