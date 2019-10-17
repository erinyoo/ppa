const bmi = require('../../src/functions/bmi');

describe('calculates correct BMI and BMI category', function() {
	it('should output the correct BMI value', () => {
		const feet = 5;
		const inches = 8;
		const weight = 200;
		expect(bmi(feet, inches, weight).number).toBe(31.14186851211072);
	});

	it('should output UNDERWEIGHT for BMI value less than or equal to 18.5', () => {
		const feet = 5;
		const inches = 8;
		const weight = 100;
		expect(bmi(feet, inches, weight).category).toBe('UNDERWEIGHT');
	});

	it('should output NORMAL for BMI value in range of 18.6 to 24.9', () => {
		const feet = 5;
		const inches = 8;
		const weight = 150;
		expect(bmi(feet, inches, weight).category).toBe('NORMAL');
	});

	it('should output OVERWEIGHT for BMI value in range of 25 to 29.9', () => {
		const feet = 5;
		const inches = 8;
		const weight = 185;
		expect(bmi(feet, inches, weight).category).toBe('OVERWEIGHT');
	});

	it('should output OBESE for BMI value greater than or equal to 30', () => {
		const feet = 5;
		const inches = 8;
		const weight = 300;
		expect(bmi(feet, inches, weight).category).toBe('OBESE');
	});
});

test('Jest framework runs correctly', () => {
  expect(true).toBeTruthy();
});