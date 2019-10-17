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
Necessary parameters that can be inputted in Postman can be found listed in the `main.html` file. You can also see this file once the server is up and navigate to `localhost:5000/`

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
 - [Docker CE](https://docs.docker.com/v17.09/engine/installation) - download the latest Docker CE, follow instructions for appropriate OS
 - [Mongo Docker Image](https://hub.docker.com/_/mongo) - ensure you have the latest mongo image from docker by running this command
  - `docker pull mongo`

If you already have NodeJS and npm installed in your environment, please ensure you have the correct versions listed above by running `node -v` and `npm -v`.

If you do not have the correct version of Node, go [here](https://www.hostingadvice.com/how-to/update-node-js-latest-version/) to see a tutorial on installing a different version. To install a different version of npm, look at this [Github response](https://github.com/tj/n/issues/484).

After installation of correct NodeJS and npm versions, proceed to the root directory of the project and run `npm i` to retrieve all necessary dependencies.

## Execution
Clone this repository onto local computer. 
1. Install all necessary dependencies by running this command at the root directory
  - `npm install`
2. Run the command to get the Docker container with the MongoDB image up
  - `docker run -d -p 27017-27019:27017-27019 mongo`
  - Docker should now be running with the mongo image
  - You can check by running the command `docker ps -a` to see all your Docker containers
3. Now run this command to start the server and begin making requests or inputting into the console
  - `node index.js`
  - If no errors appear, the application is now running on `localhost:5000`
4. To execute the test suite, run `npm test` at the root project folder
  - Mocha will run all function tests as well as run coverage
  - Mocha will also proceed to run all HTTP tests
  - Mocha will also proceed to run all database tests

When closing or restarting the application, there is no need to run the `docker run...` command again. You may have to run this command ONLY if you have stopped the container or there was an error connecting to the database.