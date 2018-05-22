// npm install mocha --save-dev
// npm install chai --save-dev
// npm install chai-http --save-dev

var chai = require("chai");
var expect = chai.expect;
var chai_http = require("chai-http");
var config = require("../config");

describe('GET /users/{user_id} tests', function() {

    var contactEmail = Math.random().toString(36).substring(7) + '@mailinator.com';
    var userId;

    before(function (done) {

        var requestBody = {
            name: 'Daniel Schonfeld',
            user_name: contactEmail
        };

        chai.use(chai_http);
        chai.request(config.url.devci)
            .post('/users')
            .set('x-api-key', config.apiKey.qa)
            .set('Content-Type', 'application/json')
            .send(requestBody)
            .end(function (err, res) {
                expect(res).to.have.status(201);
                userId = res.body.user_id;
                done();
            });
    });

    it('returns a 200 response', function(done) { // <= Pass in done callback
        setTimeout(done, 15000);

        chai.use(chai_http);
        chai.request(config.url.devci)
        .get('/users/' + userId)
        .set('x-api-key', config.apiKey.qa)
        .set('Content-Type', 'application/json')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();                               // <= Call done to signal callback end
        });
    });
});