var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

process.env.NODE_ENV = 'test';

var bmiController = require('../../src/controllers/bmi.js');
var bmiFix = require('./fixtures/bmi.json');
var BMI = require('../../src/models/bmi.js');
var Distance = require('../../src/models/distance.js');

describe('BMI Database Functions', () => {
    beforeEach(() => {
        sinon.stub(BMI, 'find');
        sinon.stub(BMI.prototype, 'save');
    });

    afterEach(() => {
        BMI.find.restore();
        BMI.prototype.save.restore();
    });

    it('should retreive all the BMI docs', (done) => {
        var obj = bmiFix.all.success.res;
        BMI.find.yields(null, obj);
        var req = {
            body: {
                feet: 5,
                inches: 1,
                weight: 150
            }
        };
        var res = {
            send: sinon.stub()
        };
        bmiController.getBMI(req, res);
        sinon.assert.calledWith(res.send, obj);
        done();
    });

    it('should save BMI docs', (done) => {
        var req = {
            body: {
                feet: 5,
                inches: 1,
                weight: 150
            }
        };
        var res = {
            send: sinon.stub()
        };
        bmiController.sendBMI(req, res);
        expect(BMI.prototype.save.callCount).to.equal(1);
        done();
    });
});