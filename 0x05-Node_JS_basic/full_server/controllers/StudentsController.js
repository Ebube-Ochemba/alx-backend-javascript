// A class named StudentController
const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const path = process.argv[2]; // Database file path from command line arguments
    try {
      const fieldData = await readDatabase(path);
      let output = 'This is the list of our students\n';

      // Sort fields alphabetically (case insensitive)
      const fields = Object.keys(fieldData).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      fields.forEach((field) => {
        output += `Number of students in ${field}: ${fieldData[field].length}. List: ${fieldData[field].join(', ')}\n`;
      });

      res.status(200).send(output.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const path = process.argv[2]; // Database file path
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const fieldData = await readDatabase(path);
      const studentsInMajor = fieldData[major];

      if (studentsInMajor) {
        res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
      } else {
        res.status(200).send('List: ');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
    return null;
  }
}

module.exports = StudentsController;
