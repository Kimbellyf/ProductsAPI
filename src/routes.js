const express = require("express")
const mongoose = require ("mongoose")
const routes = express.Router();

const ProductController = require ('./controllers/ProductController');

const Product = mongoose.model("Product");
routes.get('/products', ProductController.findAll);

routes.get("/",(req,res) =>{
    Product.create({
        title:"React Native",
        description: "lala",
        url :"http://git.com"
    })
    console.log("alou")
    res.send("criou")
})
routes.post('/product',ProductController.createOne);

module.exports = routes;
