const express = require('express');
const server = express();
const { validateAuth } = require('./validateAuth');
server.use(express.json());

server.use(validateAuth)

server.post('/login', (req, res) => {
   console.log(req.body)

    res.status(200).send('Logged in')
})

server.post('/register', (req, res) => {
   console.log(req.body)

    res.status(201).send('Registerd succesfully')
})

exports.server = server