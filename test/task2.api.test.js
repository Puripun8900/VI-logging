const request = require('supertest');
const { expect } = require('chai');


let app;
let server;


before(function() {
// require the app - it will start listening
const m = require('../src/task2/main');
app = m.app;
server = m.server;
});


after(function(done) {
if (server && server.close) server.close(done);
else done();
});


describe('Task2 - counter API', function() {
it('should read initial counter (0)', async function() {
const res = await request(app).get('/counter-read');
expect(res.status).to.equal(200);
expect(res.body).to.have.property('value');
expect(res.body.value).to.equal(0);
});


it('should increase counter', async function() {
const res1 = await request(app).get('/counter-increase');
expect(res1.status).to.equal(200);
expect(res1.body.value).to.equal(1);


const res2 = await request(app).get('/counter-increase');
expect(res2.body.value).to.equal(2);
});


it('should read current counter', async function() {
const res = await request(app).get('/counter-read');
expect(res.body.value).to.equal(2);
});


it('should reset counter to zero', async function() {
const res = await request(app).get('/counter-reset');
expect(res.body.value).to.equal(0);


const res2 = await request(app).get('/counter-read');
expect(res2.body.value).to.equal(0);
});
});