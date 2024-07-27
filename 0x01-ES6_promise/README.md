# ES6 Promises

> This project was an introduction to ES6 Promises.

## Summary

I learnt about Promises (how, why, and what), how to use the `then`, `resolve`, `catch` methods, how to use every method of the Promise object, Throw / Try, The await operator, and how to use an `async` function

## Files

> Each file contains the solution to a task in the project.

- [x] [0-promise.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x01-ES6_promise/0-promise.js): Returns a `promise` using this prototype `function getResponseFromAPI()`.
- [x] [1-promise.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x01-ES6_promise/1-promise.js): Using the prototype below, return a `promise`. The parameter is a `boolean`.
```js
getFullResponseFromAPI(success)
```
- [x] [2-then.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x01-ES6_promise/2-then.js): Using the function prototype below, append three handlers to the function:
```js
function handleResponseFromAPI(promise)
```
- [x] [3-all.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x01-ES6_promise/3-all.js): use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console. In the event of an error, log `Signup system offline` to the console.
```js
function handleProfileSignup()
```
- [x] [4-user-promise.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x01-ES6_promise/4-user-promise.js): Using the following prototype:
```js
function signUpUser(firstName, lastName) {
}
```
That returns a resolved promise with this object:
```js
{
  firstName: value,
  lastName: value,
}
```
- [x] [5-photo-reject.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x01-ES6_promise/5-photo-reject.js): Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).
- [x] [6-final-user.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x01-ES6_promise/6-final-user.js): A function named `handleProfileSignup`.  It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string).
- [x] [7-load_balancer.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x01-ES6_promise/7-load_balancer.js): A function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise).
- [x] [8-try.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x01-ES6_promise/8-try.js): Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).
- [x] [9-try.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x01-ES6_promise/9-try.js): A function named `guardrail` that will accept one argument `mathFunction` (Function).
- [x] [100-await.js](https://github.com/Ebube-Ochemba/alx-backend-javascript/blob/main/0x01-ES6_promise/100-await.js): An async function named `asyncUploadUser` that will call these two functions and return an object with the following format:
```js
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
```

> [package.json](./package.json): A manifest for the project dependencies. Provided by Alx.

> [babel.config.js](./babel.config.js): A babel configuration file. Provided by Alx.

> [.eslintrc.js](./.eslintrc.js): An eslint configuration file. Provided by Alx.

- [__tests__](./__tests__): The jest test files for the project.
