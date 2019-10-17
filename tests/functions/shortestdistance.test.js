const shortestDistance = require('../../functions/shortestdistance');

describe('calculates distance between two (x, y) coordinates', function() {
    it('should return correct whole number distance using distance formula', () => {
        const x1 = 2;
        const y1 = 5;
        const x2 = 10;
        const y2 = 20;
        expect(shortestDistance(x1, y1, x2, y2)).toBe(17);
    });

    it('should return correct decimal distance using distance formula', () => {
        const x1 = 2.4;
        const y1 = 5.2;
        const x2 = 10.1;
        const y2 = 20.5;
        expect(shortestDistance(x1, y1, x2, y2)).toBeGreaterThan(17);
    });
});

test('Jest framework runs correctly', () => {
  expect(true).toBeTruthy();
});