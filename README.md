[![Build Status](https://travis-ci.org/erinyoo/ppa.svg?branch=master)](https://travis.ci.org/erinyoo/ppa)
# Professional Practice Assignment
## By Erin Yoo
Using previously written code from PPA#1 to create a full-blown web-application. Application stores certain function inputs and outputs into local MongoDB cluster that is spun up using Docker.

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
Clone this repository onto local computer.  
1. Run this command first in a separate tab or window of your console:
  - `docker-compose up`
2. Now run this command in a separate and new console while your first command is still running:
  - `node index.js`
3. If no errors appear on console, the application is running in your console as well as `localhost:5000`
4. To execute the test suite, run `npm test` at the root project folder and Jest should run with coverage