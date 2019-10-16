var bmi = require('./functions/bmi'),
	emailVerifier = require('./functions/emailverifier'),
	retirement = require('./functions/retirement'),
	shortestDistance = require('./functions/shortestdistance');

var express = require('express'),
	prompts = require('prompts'),
	mongoose = require('mongoose');

var port = 5000,
	app = express();

var BMIRoutes = require('./src/routes/BMIRoutes.js'),
	Distance = require('./src/routes/DistanceRoutes.js');

mongoose.connect("mongodb://0.0.0.0:27017/ppa", { useUnifiedTopology: true, useNewUrlParser: true });

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/main.html');
});

app.use('/bmi', BMIRoutes);
app.use('/distance', DistanceRoutes);

var server;
async function startServer() {
	server = app.listen(port);
}
startServer().then(console.log('Server is running on port ' + port));

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
			BMI.find().exec(function(err, docs) {
				console.log('\n' + docs + '\r');
			});
			console.log('Beginning BMI Calculator');
			const bmiPrompts = [
				{ type: 'number',
					name: 'feet',
					message: 'How many feet in your height?' },
				{ type: 'number',
					name: 'inches',
					message: 'How many inches in your height?' },
				{ type: 'number',
					name: 'weight',
					message: 'How much is your weight in pounds?' }];
			const bmiValues = await prompts(bmiPrompts);
			var vals = bmi(bmiValues.feet, bmiValues.inches, bmiValues.weight);
			var bodyMass = new BMI();
			bodyMass.code = "BMI";
			bodyMass.inputs = {
				height_feet: bmiValues.feet,
				height_inches: bmiValues.inches,
				weight: bmiValues.weight };
			bodyMass.outputs = {
				bmi_index: vals.number,
				bmi_classification: vals.category };
			bodyMass.created_at = Date.now();

			bodyMass.save(function(err) {
				if(err) {
					throw err;
				}
			});
			console.log('Category: ' + vals.category + ' BMI Index: ' + vals.number);
		} else if (response.choice === "E" || response.choice === "e") {
			console.log('Beginning Email Verifier');
			const emailPrompt = await prompts({
				type: 'text',
				name: 'email',
				message: 'What value would you like to verify?' });
			if(emailVerifier(emailPrompt.email)) {
				console.log('Valid email!');
			} else {
				console.log('Not a valid email.');
			}
		} else if (response.choice === "R" || response.choice === "r") {
			console.log('Beginning Retirement Calculator');
			const retirementPrompts = [
				{ type: 'number',
					name: 'age',
					message: 'What is your current age in years?' },
				{ type: 'number',
					name: 'annualsalary',
					message: 'What is your annual salary in $?' },
				{ type: 'number',
					name: 'percentage',
				message: 'What is your percentage saved (%)?' },
				{ type: 'number',
					name: 'desiredgoal',
					message: 'What is your desired retirement goal in $?' }];
			const retirementValues = await prompts(retirementPrompts);
			var age = retirement(retirementValues.age, retirementValues.annualsalary, retirementValues.percentage, retirementValues.desiredgoal);
			if(age === -1) {
				console.log('Goal not met in time.');
			} else {
				console.log('Goal met at age ' + age);
			}
		} else if (response.choice === "S" || response.choice === "s") {
			BMI.find().exec(function(err, docs) {
				console.log('\n' + docs + '\r');
			});
			console.log('Beginning Shortest Distance Calculator');
			const coordinatePrompts = [
				{ type: 'number',
					name: 'firstX',
					message: 'What is the x value for the first coordinate?',
					float: true, },
				{ type: 'number',
					name: 'firstY',
					message: 'What is the y value for the first coordinate?',
					float: true, },
				{ type: 'number',
					name: 'secondX',
					message: 'What is the x value for the second coordinate?',
					float: true, },
				{ type: 'number',
					name: 'secondY',
					message: 'What is the y value for the second coordinate?',
					float: true, }];
			const coordinateValues = await prompts(coordinatePrompts);
			var distanceFound = new Distance();
			distanceFound.inputs = {
				x1: coordinateValues.firstX,
				y1: coordinateValues.firstY,
				x2: coordinateValues.secondX,
				y2: coordinateValues.secondY,
			};
			distanceFound.outputs = {
				distance: shortestDistance(coordinateValues.firstX, coordinateValues.firstY, coordinateValues.secondX, coordinateValues.secondY)
			};
			distanceFound.created_at = Date.now();
			distanceFound.save(function(err) {
				if(err) {
					throw err;
				}
			});
			console.log('Shortest distance is: ' + shortestDistance(coordinateValues.firstX, coordinateValues.firstY, coordinateValues.secondX, coordinateValues.secondY));
		} else if (response.choice === "Q" || response.choice === 'q') {
			console.log('Quitting program...');
			console.log('Server shutting down...');
			console.log('Database connection shutting down...')
			mongoose.connection.close();
			server.close();
			return;
		} else {
			console.log('Please enter a valid option from the menu.');
		}
 	}
})();
