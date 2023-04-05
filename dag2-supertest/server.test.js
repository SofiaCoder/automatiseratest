const request = require('supertest')
const { server } = require('./server')


describe("Testing server enpoints", () => {
    test('POST /register should respond with 400 if body is bad', async () => {
        const respons = await request(server).post('/register').send({});

        expect(respons.status).toBe(400);
    })

    test('POST /register shoul respond 201 if good registration', async () => {
        const respons = await request(server).post('/register').send({username: 'Soffi', password: 'hemligt'});

        expect(respons.status).toBe(201);
    })

    test('POST /login should respond with 400 if body is bad', async () => {
        const respons = await request(server).post('/login').send({username: 'Soffi'});

        expect(respons.status).toBe(400);
    })

    test('POST /login should respond with 200 if good login', async () => {
        const respons = await request(server).post('/login').send({username: 'Soffi', password: 'hemligt'});

        expect(respons.status).toBe(200);
    })
})