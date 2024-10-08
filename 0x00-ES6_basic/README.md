# ES6 Basics

> This project was an introduction to ES6.

## Summary

I learnt about what ES6 is, the new features introduced in ES6, the difference between a `constant` and a `variable`, Block-scoped variables, Arrow functions and function parameters default to them, Rest and spread function parameters, String templating in `ES6`, Object creation and their properties in ES6 and Iterators and `for-of` loops.

## Files

> Each file contains the solution to a task in the project.

- [x] [0-constants.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/0-constants.js): Modify the given functions.
- [x] [1-block-scoped.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/1-block-scoped.js): Given what you’ve read about `var` and `hoisting`, modify the variables inside the given function taskBlock.
so thatthe variables aren’t overwritten inside the conditional block.
- [x] [2-arrow.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/2-arrow.js): Rewrite the given standard function to use ES6’s arrow syntax of the function `add` (it will be ananonymous function after)
- [x] [3-default-parameter.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/3-default-parameter.js): Condense the internals of the given function to 1 line - without changing the name of eachfunction/variable.
- [x] [4-rest-parameter.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/4-rest-parameter.js): Modify the following function to return the number of arguments passed to it using the rest parametersyntax
```js
export default function returnHowManyArguments() {}
```
- [x] [5-spread-operator.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/5-spread-operator.js): Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below.Your function body should be one line long.
```js
export default function concatArrays(array1, array2, string) {}
```
- [x] [6-string-interpolation.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/6-string-interpolation.js): Rewrite the return statement (of a given) to use a template literal so you can the substitute the variables you’ve defined.
- [x] [7-getBudgetObject.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/7-getBudgetObject.js): Modify a given function’s `budget` object to simply use the keyname instead.
- [x] [8-getBudgetCurrentYear.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/8-getBudgetCurrentYear.js): Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object.
- [x] [9-getFullBudget.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/9-getFullBudget.js): Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object.
- [x] [10-loops.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/10-loops.js): Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that `var` is not ES6-friendly.
- [x] [11-createEmployeesObject.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/11-createEmployeesObject.js): A function named `createEmployeesObject` that will receive two arguments:
  - `departmentName` (String)
  - `employees` (Array of Strings)
- [x] [12-createReportObject.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/12-createReportObject.js): A function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.
- [x] [100-createIteratorObject.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/100-createIteratorObject.js): A function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.
- [x] [101-iterateThroughObject.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x00-ES6_basic/101-iterateThroughObject.js): A  function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.

> [package.json](./package.json): A manifest for the project dependencies. Provided by Alx.

> [babel.config.js](./babel.config.js): A babel configuration file. Provided by Alx.

> [.eslintrc.js](./.eslintrc.js): An eslint configuration file. Provided by Alx.

- [__tests__](./__tests__): The jest test files for the project.
