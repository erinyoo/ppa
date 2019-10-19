
let chai = require('chai');
var expect = chai.expect;

let emailVerifier = require('../../src/functions/emailverifier');

describe('Email Verifier Unit Tests', () => {
    const validEmail1 = 'email@email.com';
    const validEmail2 = '!+email@email.com';
    const invalidEmail1 = 'email@email.com.';
    const invalidEmail2 = '.email@email.com';
    const invalidEmail3 = 'em..ail@email.com';
    const invalidEmail4 = '1email@email.com';
    const invalidEmail5 = 'em<ai@l@email.com';

	it('should return true for generic valid email', () => {
		expect(emailVerifier(validEmail1)).to.be.true;
    });

    it('should allow for !$%*+-=?^_{|}~ in email', () => {
		expect(emailVerifier(validEmail2)).to.be.true;
	});
    
    it('should not allow period at end of email', () => {
		expect(emailVerifier(invalidEmail1)).to.be.false;
    });

    it('should not allow period at start of email', () => {
		expect(emailVerifier(invalidEmail2)).to.be.false;
    });
    
    it('should not allow consecutive periods in email', () => {
		expect(emailVerifier(invalidEmail3)).to.be.false;
    });
    
    it('should not allow numeric beginning in email', () => {
		expect(emailVerifier(invalidEmail4)).to.be.false;
    });
    
    it('should not allow "(),:;<>@[\\]` in email', () => {
		expect(emailVerifier(invalidEmail5)).to.be.false;
	});
});