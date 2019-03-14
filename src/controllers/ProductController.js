const mongoose = require ('mongoose');
const Product = mongoose.model('Product');

module.exports ={
    async createOne (req,res){
        //criação
        const product = await Product.create(req.body);

        return res.json(product);

    },
    async findAll (req, res){
        const products = await Product.find();

        return res.json(products)
    },
    async findOne(req,res){
        const product = await Product.findById()
        
        return res.json("nada por enq")
    },
    async UpdateOne(req,res){

    },
    async removeOne(req,res){

    }
}