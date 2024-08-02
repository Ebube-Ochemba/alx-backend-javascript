# Typescript

> This project was an introduction to Typescript.

## Summary

I learnt about basic types in Typescript, iInterfaces, Classes, and functions, how to work with the DOM and Typescript, Generic types, how to use namespaces, how to merge declarations, how to use an ambient Namespace to import an external library, and basic nominal typing with Typescript.

## Files

> Each folder contains the solution to a task in the project.

- [x] [task #0](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_0): Write an interface named `Student` that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`:
  - Create two students, and create an array named `studentsList` containing the two variables
  - Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
  - Each row should contain the first name of the student and the location
- [x] [task #1](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_1): Write an interface named `Teacher`:
  - `firstName(string)` and `lastName(string)`. These two attributes should only be modifiable when a Teacher is first initialized
  - `fullTimeEmployee(boolean)` this attribute should always be defined
  - `yearsOfExperience(number)` this attribute is optional
  - `location(string)` this attribute should always be defined
  - Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
- [x] [task #2](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_1): Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`.
- [x] [task #3](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_1): Write a function `printTeacher`:
  - It accepts two arguments `firstName` and `lastName`
  - It returns the first letter of the firstName and the full lastName
  - Example: `printTeacher("John", "Doe") -> J. Doe`
  - Write an interface for the function named `printTeacherFunction`.
- [x] [task #4](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_1): Write a Class named `StudentClass`:
  - The constructor accepts `firstName(string)` and `lastName(string)` arguments
  - The class has a method named `workOnHomework` that return the string `Currently working`
  - The class has a method named `displayName`. It returns the firstName of the student
  - The constructor of the class should be described through an Interface
  - The class should be described through an Interface
- [x] [task #5](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_2): "Advanced types Part I"
  - Create the `DirectorInterface` interface with the 3 expected methods
  - Create the `TeacherInterface` interface with the 3 expected methods
  - Create a `class Director` that will implement `DirectorInterface`
  - Create a class `Teacher` that will implement `TeacherInterface`
  - Create a function `createEmployee` with the specified requirements
- [x] [task #6](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_): "Advanced types Part II"
  - Write a function `isDirector`
  - Write a function `employee`
- [x] [task #7](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_2): "Advanced types Part III"
  - Write a String literal type named `Subjects` allowing a variable to have the value `Math` or `History` only.
  - Write a function named `teachClass`
- [ ] [task #8](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_3):
- [ ] [task #9](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_4):
- [ ] [task #10](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_4):
- [ ] [task #11](https://github.com/Ebube-Ochemba/alx-backend-javascript/tree/main/0x04-TypeScript/task_5):
