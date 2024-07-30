export default function getStudentsByLocation(studentsObject, city) {
  if (!Array.isArray(studentsObject)) {
    return [];
  }

  return studentsObject
    .filter((student) => student.location === city);
}
