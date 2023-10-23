const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, 'Please enter a title']
    },
    price: {
        type: Number,
        required: [true, 'Please enter a price'],
        min: [1, 'Please enter a minimum price of 1'],
    },
    qte: {
        type: Number,
        required: [true, 'Please enter a quantity']
    },
    instock:{
        type: Boolean,
        default: true,
    },
    image:{
        type: String,
        required: [true, 'Please enter an image'],
        maxlength: [255, 'Image must be at least 255 characters']
    }
});
const Book = mongoose.model( 'Book', bookSchema );
module.exports = Book;