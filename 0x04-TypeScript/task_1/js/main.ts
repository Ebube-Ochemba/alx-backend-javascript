// main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // Readonly property
  readonly lastName: string; // Readonly property
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional property
  location: string;
  [key: string]: any; // Allow any additional properties
}

// Define the director interface
interface Directors extends Teacher {
  numberOfReports: number; // Required property specific to Directors
}

// Implement the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Define the printTeacherFunction interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}


// Create three teachers
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

// Create one director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};


// Create a student class

// Define the Student interface
interface studentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
// Define the studentClassConstructurInterface
interface studentClassConstructorInterface {
  new (firstName: string, lastName: string): studentClassInterface;
}
// Create the student class
class StudentClass implements studentClassInterface {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
      this._firstName = firstName;
      this._lastName = lastName;
  }

  workOnHomework() {
      return 'Currently working';
  }
  
  displayName() {
      return this._firstName;
  }
}


// log the output
console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));

const student1 = new StudentClass("Jesse", "Pinkman");
console.log(student1.workOnHomework());
console.log(student1.displayName());
