const express = require('express');
const server = express();
const joi = require('joi');
server.use(express.json());

server.post('/login', (req, res) => {})

server.post('/register', (req, res) => {
    const schema = joi.object({
        username: joi.string().required(),
        password: joi.string().required()
    })

    const { error, value } = schema.validate(req.body)
    if(error) {
        res.status(400).send(error.details[0].message)
        return;
    }

    res.status(201).send('Registerd succesfully')
})


exports.server = server