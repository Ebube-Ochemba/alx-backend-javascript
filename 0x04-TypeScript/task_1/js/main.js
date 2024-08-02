// main.ts
// Implement the printTeacher function
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
// Create three teachers
var teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};
// Create one director
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
// log the output
console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
