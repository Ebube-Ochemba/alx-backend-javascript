// Define the Base Interface
interface Base {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

// Define the Director interface
interface DirectorInterface extends Base {
  workDirectorTasks(): string; // Specific to Directors
}

// Define the Teacher interface
interface TeacherInterface extends Base {
  workTeacherTasks(): string; // Specific to Teacherrs
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Function to check if the employee is a Director
function isDirector(employee: Base): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Base): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return (employee as TeacherInterface).workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    return `Teaching ${todayClass}`;
}



// Example usage
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
console.log(executeWork(createEmployee('$500')));

console.log(teachClass('Math'));
console.log(teachClass('History'))
