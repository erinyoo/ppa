let chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

let bmi = require('../../src/functions/bmi');

describe('BMI Unit Tests', () => {
	const feet = 5;
	const inches = 8;
	const generalWeight = 200;
	const underweight = 100;
	const normalWeight = 150;
	const overweight = 185;
	const obese = 300;
	let BMI;

	it('should output the correct BMI value', () => {
		BMI = bmi(feet, inches, generalWeight);
		expect(BMI.number).to.equal(31.14186851211072);
	});

	it('should give UNDERWEIGHT category for value less than 18.5', () => {
		BMI = bmi(feet, inches, underweight);
		assert.isAtMost(BMI.number, 18.5);
		expect(BMI.category).to.equal('UNDERWEIGHT');
	});

	it('should give NORMAL category for value between 18.6 to 24.9', () => {
		BMI = bmi(feet, inches, normalWeight);
		assert.isAbove(BMI.number, 18.5);
		assert.isAtMost(BMI.number, 24.9);
		expect(BMI.category).to.equal('NORMAL');
	});

	it('should give OVERWEIGHT category for value between 25 to 29.9', () => {
		BMI = bmi(feet, inches, overweight);
		assert.isAbove(BMI.number, 24.9);
		assert.isAtMost(BMI.number, 29.9);
		expect(BMI.category).to.equal('OVERWEIGHT');
	});

	it('should give OBESE category for value greater than or equal to 30', () => {
		BMI = bmi(feet, inches, obese);
		assert.isAbove(BMI.number, 29.9);
		expect(BMI.category).to.equal('OBESE');
	});
});