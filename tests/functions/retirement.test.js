const retirement = require('../../src/functions/retirement');

describe('calculates the age at which retirement is reached', function() {
  
  it('correctly returns -1 if user reaches age 100 before reaching goal', () => {
    const age = 60;
    const annualsalary = 20000;
    const percentage = 30;
    const goal = 600000000000;
    expect(retirement(age, annualsalary, percentage, goal)).toBe(-1);
  });

  it('correctly returns age which user reaches goal', () => {
    const age = 20;
    const annualsalary = 60000;
    const percentage = 30;
    const goal = 600000;
    expect(retirement(age, annualsalary, percentage, goal)).toBe(45);
  });
});

test('Jest framework runs correctly', () => {
  expect(true).toBeTruthy();
});