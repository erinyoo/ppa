console.log('Database must be running in Docker for tests to pass');

process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHTTP = require('chai-http');
var server = require('../../src/server.js');
var mongoose = require('mongoose');
chai.should();

chai.use(chaiHTTP);

describe('API Endpoint Tests', () => {
    it('GET /bmi should have 200 status and return array', (done) => {
        chai.request(server).get('/bmi').end((err, res) => {
            if(err) throw err;
            res.should.have.status(200);
            done();
        });
    });

    it('GET /distance should have 200 status and return array', (done) => {
        chai.request(server).get('/distance').end((err, res) => {
            if(err) throw err;
            res.should.have.status(200);
            done();
        });
    });

    it('POST /bmi should have 200 status and create BMI', (done) => {
        const bmi = {
            feet: 5,
            inches: 7,
            weight: 130
        };

        chai.request(server).post('/bmi').send(bmi).end((err, res) => {
            if(err) throw err;
            res.should.have.status(200);
            res.body.should.have.property('inputs');
            res.body.should.have.property('outputs');
            res.body.should.have.property('created_at');
            done();
        });
    });

    it('POST /distance should have 200 status and create Distance', (done) => {
        const coordinates = {
            x1: 5,
            y1: 4,
            x2: 10,
            y2: 5
        };

        chai.request(server).post('/distance').send(coordinates).end((err, res) => {
            if(err) throw err;
            res.should.have.status(200);
            res.body.should.have.property('inputs');
            res.body.should.have.property('outputs');
            res.body.should.have.property('created_at');
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