'use strict';
const assert = require('assert');
const sinon = require('sinon');
const mongoose = require('mongoose');
const BMI = require('../models/BMI.js');
var s = require('sinon-as-promised');
var sm = require('sinon-mongoose');


describe('creating bmi docs', () => {
    var BMIMock = sinon.mock(BMI);

    it('finds all BMI listings in database', function(done) {
        BMIMock.expects('find').withArgs().chain('exec').resolves('RESULT');
        BMI.find().then(function (result) {
            BMIMock.verify();
            BMIMock.restore();
            assert.equal(result, 'RESULT');
            done();
        });
    });

});