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

interface Directors extends Teacher {
  numberOfReports: number; // Required property specific to Directors
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

console.log(teacher3);
console.log(director1);