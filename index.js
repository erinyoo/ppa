const bmi = require('./functions/bmi');
const emailVerifier = require('./functions/emailverifier');
const retirement = require('./functions/retirement');
const shortestDistance = require('./functions/shortestdistance');
const prompts = require('prompts');

console.log('Hello! Please enter the letter for the function you\'d like to execute from the menu provided.');
console.log('B - BMI Calculator\nE - Email Verifier\nR - Retirement Calculator\nS - Shortest Distance Calculator\nQ - Exit application');
 
(async () => {
  while (true) {
    const response = await prompts({
      type: 'text',
      name: 'choice',
      message: 'What function would you like to execute?'
    });
    if(response.choice === "B" || response.choice === "b") {
      console.log('Beginning BMI Calculator');
      const bmiPrompts = [
        {
          type: 'number',
          name: 'feet',
          message: 'How many feet in your height?'
        },
        {
          type: 'number',
          name: 'inches',
          message: 'How many inches in your height?'
        },
        {
          type: 'number',
          name: 'weight',
          message: 'How much is your weight in pounds?'
        }
      ];
      const bmiValues = await prompts(bmiPrompts);
      console.log(bmi(bmiValues.feet, bmiValues.inches, bmiValues.weight));
    } else if (response.choice === "E" || response.choice === "e") {
      console.log('Beginning Email Verifier');
      const emailPrompt = await prompts({
        type: 'text',
        name: 'email',
        message: 'What value would you like to verify?'
      });
      if(emailVerifier(emailPrompt.email)) {
        console.log('Valid email!');
      } else {
        console.log('Not a valid email.');
      }
    } else if (response.choice === "R" || response.choice === "r") {
      console.log('Beginning Retirement Calculator');
      const retirementPrompts = [
        {
          type: 'number',
          name: 'age',
          message: 'What is your current age in years?'
        },
        {
          type: 'number',
          name: 'annualsalary',
          message: 'What is your annual salary in $?'
        },
        {
          type: 'number',
          name: 'percentage',
          message: 'What is your percentage saved (%)?'
        },
        {
          type: 'number',
          name: 'desiredgoal',
          message: 'What is your desired retirement goal in $?'
        }
      ];
      const retirementValues = await prompts(retirementPrompts);
      var age = retirement(retirementValues.age, retirementValues.annualsalary, retirementValues.percentage, retirementValues.desiredgoal);
      if(age === -1) {
        console.log('Goal not met in time.');
      } else {
        console.log('Goal met at age ' + age);
      }
    } else if (response.choice === "S" || response.choice === "s") {
      console.log('Beginning Shortest Distance Calculator');
      const coordinatePrompts = [
        {
          type: 'number',
          name: 'firstX',
          message: 'What is the x value for the first coordinate?',
          float: true,
        },
        {
          type: 'number',
          name: 'firstY',
          message: 'What is the y value for the first coordinate?',
          float: true,
        },
        {
          type: 'number',
          name: 'secondX',
          message: 'What is the x value for the second coordinate?',
          float: true,
        },
        {
          type: 'number',
          name: 'secondY',
          message: 'What is the y value for the second coordinate?',
          float: true,
        }
      ];
      const coordinateValues = await prompts(coordinatePrompts);
      console.log('Shortest distance is: ' + shortestDistance(coordinateValues.firstX, coordinateValues.firstY, coordinateValues.secondX, coordinateValues.secondY));
    } else if (response.choice === "Q" || response.choice === 'q') {
      console.log('Quitting program...');
      return;
    } else {
      console.log('Please enter a valid option from the menu.');
    }
  }
})();
