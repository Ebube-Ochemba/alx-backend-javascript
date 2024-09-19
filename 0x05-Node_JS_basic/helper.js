const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n').filter((line) => line !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1);
    let output = `Number of students: ${students.length}\n`;

    const fieldData = {};
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!fieldData[field]) {
        fieldData[field] = [];
      }
      fieldData[field].push(firstname);
    });

    for (const field in fieldData) {
      if (Object.hasOwnProperty.call(fieldData, field)) {
        const studentsInField = fieldData[field];
        output += `Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}\n`;
      }
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
