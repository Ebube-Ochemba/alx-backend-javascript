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

// Create three teachers
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);