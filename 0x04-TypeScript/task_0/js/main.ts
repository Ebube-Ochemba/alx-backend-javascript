// main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Jesse",
  lastName: "Pinkman",
  age: 20,
  location: "Albuquerque, New Mexico"
};

const student2: Student = {
  firstName: "Gale",
  lastName: "Boetticher",
  age: 22,
  location: "Juan Tabo Boulevard"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
  const table: HTMLTableElement = document.createElement('table');
  const headerRow: HTMLTableRowElement = table.insertRow();
  
  // Create header cells
  const firstNameHeader: HTMLTableCellElement = headerRow.insertCell();
  firstNameHeader.textContent = "First Name";
  
  const locationHeader: HTMLTableCellElement = headerRow.insertCell();
  locationHeader.textContent = "Location";

  // Add rows for each student
  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const locationCell: HTMLTableCellElement = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  // Append the table to the document body
  document.body.appendChild(table);
}

// Call the renderTable function when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderTable);