export default function updateStudentGradeByCity(studentsObject, city, newGrades) {
  if (!Array.isArray(studentsObject) || !Array.isArray(newGrades)) {
    return [];
  }

  return studentsObject
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
