const express = require("express");
const router = express.Router();



const products = [
    { title: 'Product A', price: 14, qte: 15, instock: false },
    { title: 'Product B', price: 15, qte: 74, instock: true },
    { title: 'Product C', price: 17, qte: 89, instock: false },
]
router.get('/', (req, res) => {
    res.send({ data: "hello from here" });
})
router.get('/:id', (req, res) => {
    res.send({ data: "ID: " + req.params.id})
})

router.post('/', (req, res) =>{
    const data = req.body;
    products.push(data)
    console.log(products);
    res.send({items: data});
});
module.exports = router;