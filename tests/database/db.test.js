var chai = require('chai');
var request = require('request');
var sinon = require('sinon');
var should = chai.should();

process.env.NODE_ENV = 'test';

var bmiController = require('../../src/controllers/bmi.js');
var server = require('../../src/server.js');

var bmiFix = require('./fixtures/bmi.json');

var BMI = require('../../src/models/bmi.js');
var Distance = require('../../src/models/distance.js');

describe('BMI Database Functions', () => {
    // beforeEach(() => {
    //     sinon.stub(BMI, 'find');
    // });

    // afterEach(() => {
    //     BMI.find.restore();
    // });

    it('should retreive all the BMI docs', () => {
        sinon.stub(BMI, 'find');
        var obj = bmiFix.all.success.res;
        BMI.find.yields(null, obj);
        var req = {
            feet: 5,
            inches: 2,
            weight: 120
        };
        var res = {
            send: sinon.stub()
        };
        bmiController.getBMI(req, res);
        sinon.assert.calledWith(res.send, obj);
        // sinon.assert.calledWith(res.send, obj);
    });
});