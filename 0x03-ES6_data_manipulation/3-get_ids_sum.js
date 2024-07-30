export default function getStudentIdsSum(studentsObject) {
  if (!Array.isArray(studentsObject)) {
    return 0;
  }

  const initialValue = 0;
  const sum = studentsObject.reduce((acc, student) => acc + student.id, initialValue);

  return sum;
}
