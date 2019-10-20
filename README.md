[![Build Status](https://travis-ci.org/erinyoo/ppa.svg?branch=master)](https://travis-ci.org/erinyoo/ppa)
# Professional Practice Assignment
## By Erin Yoo
Using previously written code from PPA#1 to create a full-blown web-application. Application stores certain function inputs and outputs into local MongoDB cluster that is spun up using Docker. Usage of TravisCI for continuous integration.

## Table of Contents
 - [Functions](https://github.com/erinyoo/ppa#functions) (functions implemented)
 - [Routes](https://github.com/erinyoo/ppa#routes) (endpoints to hit)
 - [Setup](https://github.com/erinyoo/ppa#setup) (how to set up local environment to run server and tests)
 - [Execution](https://github.com/erinyoo/ppa#execution)
   - [Local CLI/Browser](https://github.com/erinyoo/ppa#local-clibrowser) (execute program in CLI and see main in browser)
   - [Test Execution](https://github.com/erinyoo/ppa#test-execution) (executing all the tests)
- [Docker & Error Handling](https://github.com/erinyoo/ppa#docker--error-handling) (common errors and fixes, extra info on Docker)

## Functions
These functions were implemented in PPA#1, adding a few functionalities to BMI and Shortest Distance.
 - **Body Mass Index**
   - Added ability to send input and ouput to MongoDB
 - **Retirement**
 - **Shortest Distance**
   - Added ability to send input and output to MongoDB
 - **Email Verifier**

## Routes
Here are the various endpoints you can hit as well as what information you can send using either Postman or on your web browser. To be able to hit routes, ensure that you have the database and server running. Please look at the [execution instructions](https://github.com/erinyoo/ppa#execution) for more information.

 Any other endpoints hit will return an error:
  - **/ GET**
    - Will return the main HTML page that reiterates what endpoints can be hit with what information and what return values will be placed in Mongo/displayed.
  - **/bmi GET**
    - No information sent, will return all current inputs/outputs that are stored in Mongo for the BMI function as a JSON output.
  - **/distance GET**
    - No information sent, will return all current inputs/outputs that are stored in Mongo for the Distance function as a JSON output.
  - **/bmi POST**
    - JSON sent
      - ```json
        {
          "feet": Number,
          "inches": Number,
          "weight": Number
        }
        ```
    - Will return the JSON that was stored in Mongo with the inputs, outputs, and timestamp.
  - **/distance POST**
    - JSON sent
      - ```json
        {
          "x1": Number,
          "y1": Number,
          "x2": Number,
          "y2": Number
        }
        ```
    - Will return the JSON that was stored in Mongo with the inputs, outputs, and timestamp.

## Setup
Requirements to install in local before any execution:
 - [NodeJS](https://nodejs.org/en/) - download version 10.16.3 LTS, the recommended version for most users.
 - [npm](https://www.npmjs.com/get-npm) - download version 6.11.3
 - [Docker CE](https://docs.docker.com/v17.09/engine/installation) - download the latest Docker CE, follow instructions for appropriate OS
 - [Mongo Docker Image](https://hub.docker.com/_/mongo) - ensure you have the latest mongo image from docker by running this command
   - `docker pull mongo`

If you already have NodeJS and npm installed in your environment, please ensure you have the correct versions listed above by running `node -v` and `npm -v`.

 - If you do not have the correct version of Node, go [here](https://www.hostingadvice.com/how-to/update-node-js-latest-version/) to see a tutorial on installing a different version. To install a different version of npm, look at this [Github response](https://github.com/tj/n/issues/484).

After all requirements are met, **clone this git repository**.

## Execution
### Local CLI/Browser
  1. If you haven't already, clone the repository.
  2. Navigate to the root directory of the project which is under the `ppa` folder. Then run the following command to install all dependencies:
     - `npm install`
  3. Run the following command next to get the Docker container with MongoDB up and running
     - `docker run -d -p 27017:27017 --name ppaDB mongo`
     - Docker should be up and running, you can check this by running the `docker ps -a` to see if it has been created.
  4. Now to start the server and to make requests through Postman or console execute:
     - `node src/index.js`
     - If no errors appear, the application is now running on `http://localhost:5000`.

### Test Execution
  1. Before running any tests on your local machine, spin and run a new Docker container with a new MongoDB instance for testing:
     - `docker run -d -p 37017:27017 --name test mongo`
  2. Before running all tests in the suite, ensure that you have closed off your local CLI server by gracefully exiting the program with the `Q` or `q` inputs.
  3. Once all completed, run all the tests by running at the root `ppa` folder:
     - `npm test`

## Docker & Error Handling
**A few pointers on Docker in this application:**
  - There is no need to run the `docker run...` command twice unless your computer has been restarted.
  - Always check what instances you've spun up by running the `docker ps -a` command.
  - If you decide to exit and spin the container up new, all data in that database will be lost.

**Common errors:**
  - If there is an error connecting to the Mongo database when starting up the server, ensure you've run the `docker run` command BEFORE running the server.
  - The HTTP tests require that the Mongo instance for `tests` is running.
  - Ensure that your local server is not also running at the time of executing the tests.
