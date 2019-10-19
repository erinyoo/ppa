const request = require('supertest')
var mongodb = require('mongo-mock');
var MongoClient = mongodb.MongoClient;
MongoClient.persist = 'mongo.js';

var url = 'mongodb://0.0.0.0:27017/ppDB';

describe('GET endpoints', () => {
    let server;
    beforeAll(done => {
        server = require('../../src/server.js');
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
        })
        done();
    })

    it('should send a GET to bmi', async () => {
        const response = await request(server).get('/bmi')
        expect(response.statusCode).toEqual(200)
    })

    afterAll(done => {
        MongoClient
        server.close(done);
    })
})