let chai = require('chai');
var expect = chai.expect;

let retirement = require('../../src/functions/retirement');

describe('Retirement Unit Tests', () => {
	const failAge = 60;
	const failSalary = 20000;
	const failPercentage = 30;
	const failGoal = 60000000000;

	const passAge = 60;
	const passSalary = 60000;
	const passPercentage = 30;
	const passGoal = 600000;

	it('should return -1 if user reaches age 100 before goal', () => {
		expect(retirement(failAge, failSalary, failPercentage, failGoal)).to.equal(-1);
    });

    it('should return correct age when goal is reached', () => {
		expect(retirement(passAge, passSalary, passPercentage, passGoal)).to.equal(85);
	});
});