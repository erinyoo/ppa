const emailVerifier = require('../functions/emailverifier');

describe('verifies string input is a valid email address', function() {

    it('should return true for general valid email', () => {
        const validEmail = 'email@email.com';
        expect(emailVerifier(validEmail)).toBe(true);
    });

    it('should not allow period at end of valid email', () => {
        const invalidEmail = 'email@email.com.';
        expect(emailVerifier(invalidEmail)).toBe(false);
    });

    it('should not allow period at start of valid email', () => {
        const invalidEmail = '.email@email.com';
        expect(emailVerifier(invalidEmail)).toBe(false);
    });

    it('should not allow two consecutive periods in valid email', () => {
        const invalidEmail = 'emai..l@email.com';
        expect(emailVerifier(invalidEmail)).toBe(false);
    });

    it('should not allow numeric beginning to valid email', () => {
        const invalidEmail = '1email@email.com';
        expect(emailVerifier(invalidEmail)).toBe(false);
    });

    it('should allow for !$%*+-=?^_{|}~ in valid email', () => {
        const validEmail = '!email@email.com';
        expect(emailVerifier(validEmail)).toBe(true);
    });

    it('should not allow "(),:;<>@[\\]` in valid email', () => {
        const invalidEmail = 'em<ail@email.com';
        expect(emailVerifier(invalidEmail)).toBe(false);
    });
});

test('Jest framework runs correctly', () => {
  expect(true).toBeTruthy();
});