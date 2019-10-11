# Professional Practice Assignment #1
## By Erin Yoo
Intro to Unit Testing &amp; T/BDD

## Functions
Functions implemented in this PPA were:
 - **Body Mass Index**
    - Input height in feet and inches. Input weight in pounds.
    - Returns BMI value and category: 
        - Underweight = <18.5
        - Normal weight ! = 18.5–24.9
        - Overweight = 25–29.9
        - Obese = BMI of 30 or greater 
    - Converts height and weight to metric values for the formula
 - **Retirement**
    - Input user's current age, annual salary, percentage saved (employer matches 35% of savings). Input desired retirement savings goal.
    - Return what age savings goal will be met.
    - You can assume death at 100 years (therefore, indicate if the savings goal is not met).
 - **Shortest Distance**
    - Input two points (x1, y1) (x2, y2) [4 values - indicate to user which values are being input]
    - Return the distance between the points using the distance formula (should be implemented without use of libraries with the exception of the square root function).
 - **Email Verifier**
    - Input a string, determine if it is a valid email address according to these stated requirements with required caveats:
        - Value entered can consist of text, optionally separated by periods. 
        - No periods can start or end the value entered.
        - Two periods together is invalid and the address must start with a non-numeric character.
        - Value entered can contain the following printable characters: !$%*+-=?^_{|}~ but not: "(),:;<>@[\]` (this function provides a good opportunity to use regular expressions).

## Naming & Organizational Content
Given the JavaScript general language conventions, I followed general rules for naming variables. In addition, I attempted to name variables as descriptively as possible for future code readers.

Given the Jest framework, I followed general conventions from the documentation provided. Grouping tests together using `describe` and using `it` for the sub-tests.

The project folder is set up as such to help distinguish between the functions and the tests. They all are under the root folder as they're a part of the project.
```
ppa1 (root)
|
|____functions
      |
      |____bmi.js
      |
      |____emailverifier.js
      |
      |____retirement.js
      |
      |____shortestdistance.js
|
|____tests
      |
      |____bmi.test.js
      |
      |____emailverifier.test.js
      |
      |____retirement.test.js
      |
      |____shortestdistance.test.js
|
|____index.js
|
|____README.md
|
|____package.json
```

## Setup
To begin, ensure that you have NodeJS and npm installed in your environment.
 - [NodeJS](https://nodejs.org/en/) - download version 10.16.3 LTS, the recommended version for most users.
 - [npm](https://www.npmjs.com/get-npm) - download version 6.11.3

If you already have NodeJS and npm installed in your environment, please ensure you have the correct versions listed above by running `node -v` and `npm -v`.

If you do not have the correct version of Node, go [here](https://www.hostingadvice.com/how-to/update-node-js-latest-version/) to see a tutorial on installing a different version. To install a different version of npm, look at this [Github response](https://github.com/tj/n/issues/484).

After installation of correct NodeJS and npm versions, proceed to the root directory of the project and run `npm i` to retrieve all necessary dependencies.

## Execution
To execute the program itself, at the root directory run `node index.js` and continue to answer the prompts on the console.

To execute the test suite, run `npm test` at the root project folder and Jest should begin running with coverage.

## Test Coverage & Tests Passing Report
![testing](/ppa1/Test%20Coverage.PNG)

## General Experience
Unit testing and TDD is different from typical coding you might perform during school projects. Testing is often seen as an afterthought. Working with unit tests and TDD I found myself coding more efficiently. By thinking about the tests first and the possibilities of failure in the function, I identified many edge cases and accounted for them while coding. It made me more aware of why each line of code was being written. It's definitely a practice that I find realistic, feasible, and helpful for a real coding environment. There may be some issues to unit testing and TDD as it's easy to MAKE the tests pass themselves. It's a very surface-level test which may give a false level of confidence.