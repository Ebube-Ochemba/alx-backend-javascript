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


// Example usage
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));