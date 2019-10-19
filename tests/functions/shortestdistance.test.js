let chai = require('chai');
var expect = chai.expect;

let shortestDistance = require('../../src/functions/shortestdistance');

describe('Shortest Distance Unit Tests', () => {
    const x1Whole = 2;
    const y1Whole = 5;
    const x2Whole = 10;
    const y2Whole = 20;

    const x1Decimal = 2;
    const y1Decimal = 5;
    const x2Decimal = 10;
    const y2Decimal = 20;

	it('should correctly calculate whole number distance', () => {
		expect(shortestDistance(x1Whole, y1Whole, x2Whole, y2Whole)).to.equal(17);
    });

    it('should correctly calculate decimal number distance', () => {
		expect(shortestDistance(x1Decimal, y1Decimal, x2Decimal, y2Decimal)).to.equal(17);
    });
});