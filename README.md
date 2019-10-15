# Professional Practice Assignment
## By Erin Yoo
Using previously written code/functions from PPA#1 to store inputs and outputs in MongoDB which is spun up using Docker. Then usage of TravisCI to build personal continuous integration pipeline with build and test phases.

## Functions
These functions were implemented in PPA#1, adding a few functionalities to BMI and Shortest Distance.
 - **Body Mass Index**
   - Added ability to send input and ouput to MongoDB
 - **Retirement**
 - **Shortest Distance**
   - Added ability to send input and output to MongoDB
 - **Email Verifier**

 ## Routes
 Any other endpoints hit will return a 404 Error.
  - **/ GET** - will return a JSON of the possible endpoints you can hit
  - **/bmi POST** - sent in the correct values of #, #, #, the calculator will use the feet in height, inches in height, and weight respectively and return the results in JSON
  - **/bmi GET** - will return all the values that are currently stored in MongoDB
  - **/distance POST** - sent in correct values of #, #, #, #, the calculator will use x1, y1, x2, y2, respectively and return the results in JSON
  - **/distance GET** - will return all values that are currently stored in MongoDB

## Setup
To begin, ensure that you have NodeJS and npm installed in your environment.
 - [NodeJS](https://nodejs.org/en/) - download version 10.16.3 LTS, the recommended version for most users.
 - [npm](https://www.npmjs.com/get-npm) - download version 6.11.3

If you already have NodeJS and npm installed in your environment, please ensure you have the correct versions listed above by running `node -v` and `npm -v`.

If you do not have the correct version of Node, go [here](https://www.hostingadvice.com/how-to/update-node-js-latest-version/) to see a tutorial on installing a different version. To install a different version of npm, look at this [Github response](https://github.com/tj/n/issues/484).

After installation of correct NodeJS and npm versions, proceed to the root directory of the project and run `npm i` to retrieve all necessary dependencies.

## Execution

### Local
To execute the program locally, navigate to the root directory and run `node index.js`.
 - Once application has started you can use the console to answer the prompts questions and get the necessary calculations for your options.
 - Using the console will also store all of your inputs and outputs into the database as well.
 - The application can be used using web API as well which can be found on `localhost:5000`.

To execute the program itself, at the root directory run `node index.js` and continue to answer the prompts on the console.

To execute the test suite, run `npm test` at the root project folder and Jest should begin running with coverage.