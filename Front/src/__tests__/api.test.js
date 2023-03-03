const supertest = require("supertest");
const { app, server } = require("../index");

const api = supertest(app);

test("login are returned as json", async () => {
    await api
        .get("api/login")
        .expect(200)
        .expect("Content-Type", /application\/json/)
})

test("logout are returned as json", async () => {
    await api
        .get("api/logout")
        .expect(200)
        .expect("Content-Type", /application\/json/)
})

test("crear are returned as json", async () => {
    await api
        .get("api/pokemon/nuevo")
        .expect(200)
        .expect("Content-Type", /application\/json/)
})

test("editar are returned as json", async () => {
    await api
        .get("api/pokemon/editar")
        .expect(200)
        .expect("Content-Type", /application\/json/)
})

test("eliminar are returned as json", async () => {
    await api
        .get("api/pokemon/eliminar")
        .expect(200)
        .expect("Content-Type", /application\/json/)
})

test("info are returned as json", async () => {
    await api
        .get("api/pokedex")
        .expect(200)
        .expect("Content-Type", /application\/json/)
})

test("registrar are returned as json", async () => {
    await api
        .get("api/register")
        .expect(200)
        .expect("Content-Type", /application\/json/)
})