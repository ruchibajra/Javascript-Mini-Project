//TASKS

/* 1. Promises
Create a function fetchData that simulates fetching data from an API. The function should
return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
should represent a user with properties id, name, and age.*/

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: 'Ruchi', age: 21 },
          { id: 2, name: 'Ruju', age: 25 },
          { id: 3, name: 'Riya', age: 30 },
          { id: 4, name: 'Anushka', age: 15 },
        ];
        resolve(users);
      }, 2000);
    });
  }

  fetchData()
  .then(users => console.log(users))
  .catch(error => console.error(error));
//-----------------------------------------------------------------------------------------------------------------------------


/*2. Closures
Create a function createCounter that returns an object with two methods: increment and
getCount. The increment method should increase the internal count by 1, and the getCount
method should return the current count. Use a closure to maintain the internal count variable.*/

function createCounter(){
    let count = 0;

    return{
        increment : function(){
            count += 1;

        },
        getCount : function(){
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // output 2
//-----------------------------------------------------------------------------------------------------------------------------


/*3. Callbacks
Create a function processData that accepts an array of numbers and a callback function. The
function should process each number in the array using the callback function and return a
new array of processed numbers.*/

function processData(numbers, callback) {
  const processedNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const processedNumber = callback(numbers[i]);
    processedNumbers.push(processedNumber);
  }
  return processedNumbers;
}

// A callback function that doubles a number
function double(number) {
  return number * 2;
}

// A callback function that squares a number
function square(number) {
  return number * number;
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = processData(numbers, double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const squaredNumbers = processData(numbers, square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
//-----------------------------------------------------------------------------------------------------------------------------


/*4. Async/Await
Rewrite the fetchData function from Question 1 using async and await.*/

function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: 'Ruchi', age: 21 },
          { id: 2, name: 'Ruju', age: 25 },
          { id: 3, name: 'Riya', age: 30 },
          { id: 4, name: 'Anushka', age: 15 },
        ];
        resolve(users);
      }, 2000);
    });
  }

  async function fetchDataAsync() {
    // Use await to wait for the promise returned by fetchData
    const users = await fetchData();
    return users;
  }

 fetchDataAsync()
 .then(users => console.log(users))
 .catch(error => console.error(error));
//-----------------------------------------------------------------------------------------------------------------------------


/*5. Array Manipulation: Map
Given an array of numbers, create a function that doubles each number using map.*/

function doubleNumbers(numbers) {
    const doubled = numbers.map(function(number) {
      return number * 2;
    });

    return doubled;
  }

  const nums = [1,1,1,1,1,1];
  const doubledNums = doubleNumbers(nums);
  console.log(doubledNums); // Output: [ 2, 2, 2, 2, 2, 2 ]
//-----------------------------------------------------------------------------------------------------------------------------


/*6. Array Manipulation: Filter
Given an array of numbers, create a function that filters out numbers less than 10 using filter.*/

function filterNumbers(numbers) {
    const filtered = numbers.filter(function(number) {
      return number >= 10;
    });

    return filtered;
  }

  const n = [5, 12, 8, 130, 44];
  const filteredNumbers = filterNumbers(n);
  console.log(filteredNumbers); // Output: [12, 130, 44]
//-----------------------------------------------------------------------------------------------------------------------------


/*7. Array Manipulation: Find
Given an array of numbers, create a function that finds the first number greater than 15 using
find.*/

function findNumber(numbers) {
    const found = numbers.find(function(number) {
      return number > 15;
    });

    return found;
  }

  const numbers1 = [5, 12, 8, 130, 44];
  const foundNumber = findNumber(numbers1);
  console.log(foundNumber); // Output: 130
//-----------------------------------------------------------------------------------------------------------------------------


/*8. Array Manipulation: Reduce
Given an array of numbers, create a function that sums all numbers using reduce.*/

function sumNumbers(numbers) {
    const sum = numbers.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);

    return sum;
  }

  const numbers2 = [1, 2, 3, 4, 5];
  const totalSum = sumNumbers(numbers2);
  console.log(totalSum); // Output: 15
//-----------------------------------------------------------------------------------------------------------------------------


/*9. Object Manipulation
Given an array of user objects, write a function to transform this array into an object where the
keys are user IDs and the values are the corresponding user objects.*/

function transformUsers(users) {
    // Use the reduce method to transform the array into an object
    const usersById = users.reduce(function(accumulator, user) {
      // Use the user ID as the key and the user object as the value
      accumulator[user.id] = user;
      return accumulator;
    }, {});

    return usersById;
  }

  const users = [
          { id: 1, name: 'Ruchi', age: 21 },
          { id: 2, name: 'Ruju', age: 25 },
          { id: 3, name: 'Riya', age: 30 },
          { id: 4, name: 'Anushka', age: 15 },
  ];

  const usersById = transformUsers(users);
  console.log(usersById);
//-----------------------------------------------------------------------------------------------------------------------------


/*10. Classes and Objects
Create a Person class with a constructor that accepts name and age parameters. Add a
method describe that returns a string describing the person.*/

class Person {
    // Constructor to initialize name and age
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    // Method to describe the person
    describe() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }

  const person1 = new Person('Anu', 25);
  console.log(person1.describe()); // Output: Name: Alice, Age: 25

  const person2 = new Person('Ruch', 30);
  console.log(person2.describe()); // Output: Name: Bob, Age: 30
//-----------------------------------------------------------------------------------------------------------------------------


/*11. Inheritance
Create a Student class that extends Person and adds a grade property. Add a method study
that returns a string indicating the student is studying.*/

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   describe() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }

//   study() {
//     return `${this.name} is studying.`;
//   }
// }

// const student1 = new Student("Alice", 25, "A");
// console.log(student1.describe()); // Output: Name: Alice, Age: 25
// console.log(student1.study()); // Output: Alice is studying.
// console.log(`Grade: ${student1.grade}`); // Output: Grade: A

// const student2 = new Student("Bob", 30, "B");
// console.log(student2.describe()); // Output: Name: Bob, Age: 30
// console.log(student2.study()); // Output: Bob is studying.
// console.log(`Grade: ${student2.grade}`); // Output: Grade: B
//-----------------------------------------------------------------------------------------------------------------------------


/*12. Error Handling with Promises
Modify the fetchData function to randomly reject the promise with an error message "Failed to
fetch data". Handle this error using .catch when calling the function.*/

  function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate a 50% chance of failure
      const shouldFail = Math.random() > 0.5;

      setTimeout(() => {
        if (shouldFail) {
          reject(new Error("Failed to fetch data"));
        } else {
          const users = [
            { id: 1, name: 'Alice', age: 25 },
            { id: 2, name: 'Bob', age: 30 },
            { id: 3, name: 'Charlie', age: 35 },
          ];
          resolve(users);
        }
      }, 2000);
    });
  }

  fetchData()
    .then(users => console.log(users))
    .catch(error => console.error(error.message));
//-----------------------------------------------------------------------------------------------------------------------------


/* 13. Error Handling with Async/Await
Modify the fetchData function with async/await to handle errors using try/catch blocks.*/

async function fetchData() {
    const shouldFail = Math.random() > 0.5;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error("Failed to fetch data"));
        } else {
          const users = [
            { id: 1, name: 'Alice', age: 25 },
            { id: 2, name: 'Bob', age: 30 },
            { id: 3, name: 'Charlie', age: 35 },
          ];
          resolve(users);
        }
      }, 2000);
    });
  }

  async function fetchDataAsync() {
    try {
      const users = await fetchData();
      console.log(users);
    } catch (error) {
      console.error(error.message);
    }
  }

  fetchDataAsync();
//-----------------------------------------------------------------------------------------------------------------------------


/*14. Complex Array Manipulation
Given an array of users, where each user has a name and an array of hobbies, create a
function that returns an array of all unique hobbies using reduce.*/

function getAllUniqueHobbies(users) {
    // Use reduce to accumulate all hobbies into a single array
    const allHobbies = users.reduce((accumulator, user) => {
      // Concatenate the user's hobbies with the accumulator array
      return accumulator.concat(user.hobbies);
    }, []);

    // Use a Set to filter out duplicate hobbies and convert it back to an array
    const uniqueHobbies = [...new Set(allHobbies)];

    return uniqueHobbies;
  }

  const users1 = [
    { name: 'Alice', hobbies: ['reading', 'hiking', 'coding'] },
    { name: 'Bob', hobbies: ['hiking', 'swimming', 'coding'] },
    { name: 'Charlie', hobbies: ['reading', 'running', 'swimming'] }
  ];

  const uniqueHobbies = getAllUniqueHobbies(users1);
  console.log(uniqueHobbies); // Output: ['reading', 'hiking', 'coding', 'swimming', 'running']

// ----------------------------------------------------------------------------------------------------------------------------------------------

/*
CONCEPTURAL QUESTIONS

1. Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions.

Ans: To manage asynchronous actions in JavaScript, promises are used. It is an assurance that something will be done. The promise is used to keep track of whether the asynchronous event has been executed or not and determines what happens after the event has occurred.

A Promise has four states: 
- fulfilled: Action related to the promise succeeded
- rejected: Action related to the promise failed
- pending: Promise is still pending i.e. not fulfilled or rejected yet
- settled: Promise has fulfilled or rejected

Here are the key advantages of using promises over callbacks:

a. Chained Promises: Promises allow for cleaner, more readable code by enabling the chaining of ".then()" methods. This creates a linear 
and understandable flow of asynchronous operations.

b. Callback Hell Avoidance: Traditional callbacks often result in "callback hell" or "pyramid of doom," where nested callbacks become hard 
to read and maintain.

c. Centralized Error Handling: Promises provide a .catch() method that centralizes error handling, making it easier to manage errors from
multiple asynchronous operations in one place.

d. Combining Promises: Promises can be composed using methods like Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any(),
which enable parallel execution and aggregation of results.

e. Support for Async/Await: Promises serve as the foundation for async/await. Async/await allows you to write asynchronous code in a
synchronous style, making it more readable and easier to understand, especially for developers coming from synchronous programming backgrounds.
It builds on top of promises, enhancing their usability and expressiveness.
----------------------------------------------------------------------------------------------------------------------------------------------

2. What is a closure in JavaScript? Provide an example.

Ans:A closure is a feature in JavaScript where an inner function has access to the
outer (enclosing) function&#39;s variables. A closure is created when a function is defined inside
another function, and the inner function references variables from the outer function. This
allows the inner function to &quot;remember&quot; the environment in which it was created.

Example:

function outerFunction() {
let outerVar = &quot;I am outside!&quot;;
function innerFunction() {
console.log(outerVar); // Can access outerVar
}
return innerFunction;
}
const myClosure = outerFunction();
myClosure(); // Logs: "I am outside!"

In this example, innerFunction is a closure that captures and remembers the variable outerVar
from its outer function outerFunction.
----------------------------------------------------------------------------------------------------------------------------------------------


3. What is a callback function and why is it used in JavaScript?

Ans: A callback function is a function that is passed into another function as an
argument and is executed after some operation has been completed. Callbacks are
commonly used for handling asynchronous operations such as API calls, timers, and event
handlers.

Example:

function greet(name, callback) {
  console.log("Hello," + name);
  callback();
}
function sayGoodbye() {
  console.log("Goodbye!");
}
greet("Alice", sayGoodbye);

// Output:
// Hello, Alice
// Goodbye!
----------------------------------------------------------------------------------------------------------------------------------------------


4. What are async/await in JavaScript and how do they improve asynchronous
programming?

Ans: Async/await is syntactic sugar built on top of promises. It allows you to write asynchronous code that looks and behaves more 
like synchronous code, making it easier to read and write. The async keyword is used to declare an asynchronous function, and 
the await keyword is used to pause the execution until the promise is resolved.
Example:

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data); // Logs: "Data fetched!" after 1 second
}

The async and await keywords improve asynchromous programming as it makes easier to build an operation from a series of consecutive
asynchronous function calls, avoiding the need to create explicit promise chains, and allowing you to write code that looks just like 
synchronous code.
----------------------------------------------------------------------------------------------------------------------------------------------


5. Write the difference between ES6 and JS.

Ans: ES6, also known as ECMAScript 2015, is the sixth edition of the ECMAScript standard, which is the specification for JavaScript.
It introduced many new features and syntax enhancements that make JavaScript code more concise, readable, and powerful.

Arrow Functions: ES6 introduced arrow functions, which are a more concise syntax for writing function expressions. They have a more
compact syntax, lexical scoping of this, and do not bind their own this value. This makes arrow functions great for writing inline 
functions or for callbacks.

Class Syntax: ES6 introduced a new syntax for creating classes in JavaScript, also known as class syntax. With class syntax, you can 
define classes more declaratively, making it easier to create objects with similar properties and methods. This syntax provides a more 
familiar and structured way of working with objects and inheritance.

Let and Const Declarations: ES6 introduced two new ways to declare variables: let and const. let allows you to declare block-scoped 
variables, while const allows you to declare block-scoped variables that can't be reassigned. This helps to solve common issues and quirks 
associated with variable scoping in JavaScript.

Modules: ES6 introduced native support for modules, allowing you to organize and separate your code into reusable and independent modules. 
Modules provide a way to encapsulate code and prevent pollution of the global namespace. This promotes better code organization and improves 
code reuse and maintainability.

Template Literals: ES6 introduced template literals, tare a new way to define strings in JavaScript. Template literals allow you to embed
expressions inside string literals using ${} syntax. This makes string interpolation and multiline strings much easier and more concise.

Spread and Rest Operators: ES6 introduced the spread and rest operators, which allow you to work with arrays and objects in a more flexible 
way. The spread operator ... allows you to expand an iterable object into individual elements, making it useful for creating copies of arrays
or concatenating multiple arrays. The rest operator ... allows you to collect multiple arguments into a single array, making it useful for 
functions with a variable number of arguments.
----------------------------------------------------------------------------------------------------------------------------------------------


6. What are some of the major features introduced in ES6?
Ans: 
arrows functions.
classes.
template literals.
enhanced object literals.
destructuring assignment.
default parameters
rest and spread operators
let + const.
iterators + for..of.
----------------------------------------------------------------------------------------------------------------------------------------------
*/
