var chai = require('chai');
var request = require('request');
var sinon = require('sinon');
var should = chai.should();

process.env.NODE_ENV = 'test';

var routes = require('../../src/routes/router.js');
var server = require('../../src/server.js');

var bmiFix = require('./fixtures/bmi.json');

var BMI = require('../../src/models/bmi.js');
var Distance = require('../../src/models/distance.js');

describe('BMI Database Functions', () => {
    beforeEach(() => {
        this.post = sinon.stub(request, 'post');
        sinon.stub(BMI, 'find');
    });

    afterEach(() => {
        request.post.restore();
        BMI.find.restore();
    });

    it('should retreive all the BMI docs', (done) => {
        // const options = {
        //     // method: 'post',
        //     body: {
        //         feet: 5,
        //         inches: 3,
        //         weight: 120
        //     },
        //     // json: true,
        //     // url:'http://localhost:5000/bmi'
        // };
        // var obj = bmiFix.all.success;

        // BMI.find.yields(null, obj.res);
        // var req = { options };
        // var res = {
        //     send: sinon.stub()
        // };

        // routes(server).bmiGet(req, res);
        // sinon.assert.calledWith(res.send, obj.res);
        // this.post.yields(null, obj.res);
        // BMI.find.yields(null, obj.res);
        // request.post(options, (err, res, body) => {
        //     res = {
        //         send: sinon.stub()
        //     }
        //     sinon.assert.calledWith(BMI.find, {});
        //     done();
        // });
    });
});