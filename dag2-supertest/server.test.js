const request = require('supertest')
const { server } = require('./server')


describe("Testing server enpoints", () => {
    test('POST /register should respond with 400 if body is bad', async () => {
        const respons = await request(server).post('/register').send({});

        expect(respons.status).toBe(400);
    })

    test('POST /register shoul respond 201 if good registration', async () => {
        const respons = await (await request(server).post('/register')).send({username: 'Soffi', password: 'hemligt'});

        expect(respons.status).toBe(201);
    })
})