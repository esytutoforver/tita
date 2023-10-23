const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send({ data: 'Category Index'})
});

routes.get('/:category', (req, res) => {
    res.send({ data: 'Category ID: ' + req.params.category })
});

module.exports = routes;

