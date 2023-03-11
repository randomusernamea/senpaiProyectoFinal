const supertest = require("supertest");
const { app, server } = require("../index");

describe('POST /pokemon/nuevo', function () {
    let data = {
        "id": "id",
        "nombre": "nombre",
        "img": "img",
        "tipo1": "tipo1",
        "tipo2": "tipo2",
        "weight": "weight",
        "height": "height",
        "ability1": "ability1",
        "ability2": "ability2",
        "stats": {
            "hp": "hp",
            "atk": "atk",
            "def": "def",
            "satk": "satk",
            "sdef": "sdef",
            "spd": "spd",
        },

        "descripcion": "descripcion"
    }
    it('respond with 201 created', function (done) {
        request(app)
            .post('/pokemon/nuevo')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('GET /pokemon/:id', function () {
    it('respond with json containing a single pokemon', function (done) {
        request(app)
            .get('/pokemon/001')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /pokemon/:id', function () {
    it('respond with json pokemon not found', function (done) {
        request(app)
            .get('/pokemon/idisnonexisting')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404) //expecting HTTP status code
            .expect('"user not found"') // expecting content value
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

