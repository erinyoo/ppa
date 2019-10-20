var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

process.env.NODE_ENV = 'test';

var bmiController = require('../../src/controllers/bmi.js');
var distanceController = require('../../src/controllers/distance.js');
var bmiFix = require('./fixtures/bmi.json');
var distanceFix = require('./fixtures/distance.json');
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

describe('Distance Database Functions', () => {
    beforeEach(() => {
        sinon.stub(Distance, 'find');
        sinon.stub(Distance.prototype, 'save');
    });

    afterEach(() => {
        Distance.find.restore();
        Distance.prototype.save.restore();
    });

    it('should retreive all the Distance docs', (done) => {
        var obj = distanceFix.all.success.res;
        Distance.find.yields(null, obj);
        var req = {
            body: {
                x1: 5,
                y1: 3,
                x2: 1,
                y2: 10
            }
        };
        var res = {
            send: sinon.stub()
        };
        distanceController.getDistance(req, res);
        sinon.assert.calledWith(res.send, obj);
        done();
    });

    it('should save Distance docs', (done) => {
        var req = {
            body: {
                x1: 5,
                y1: 3,
                x2: 1,
                y2: 10
            }
        };
        var res = {
            send: sinon.stub()
        };
        distanceController.sendDistance(req, res);
        expect(Distance.prototype.save.callCount).to.equal(1);
        done();
    });
});