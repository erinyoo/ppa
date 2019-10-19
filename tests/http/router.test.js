console.log('Database must be running in Docker for tests to pass');

process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHTTP = require('chai-http');
var server = require('../../src/server.js');
var mongoose = require('mongoose');
chai.should();

chai.use(chaiHTTP);

describe('GET /bmi', () => {
    it('it should get all the BMI values', (done) => {
        chai.request(server).get('/bmi').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });

    after(() => {
        mongoose.connection.close(() => {
            console.log('Database connection closed');
        });
        server.close(() => {
            console.log('Server stopped listening');
        });
    });
});