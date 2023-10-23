const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    price: Number,
    qte: Number,
    instock: Boolean
});

const Article = mongoose.model('Article', articleSchema)
module.exports = Article;