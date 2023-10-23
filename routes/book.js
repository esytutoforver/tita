const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');

const book = require('../models/book');



routes.get('/', (req, res) => {
    const bookone = new book({
        title: 'Book',
        price: 100,
        qte: 10,
        instock: true,
        image: 'image.jpg'
    });
    res.send({ data: 'Books Index'})
});

routes.get('/:book', (req, res) => {
    res.send({ data: 'Book ID: ' + req.params.book })
});


module.exports = routes;