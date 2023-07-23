const Product = require('../models/Product');

const addProduct = async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            barCode: req.body.barCode,
            user: req.body.user
        });
        const result = await product.save();
        res.status(201).json({
            message: 'Product created',
            product: result
        });
    } catch (err) {
        res.status(500).json({
            message: 'Product not created',
            error: err
        });
    }
};

const getAll = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching products',
            error: err
        });
    }
}

module.exports = {
    addProduct,
    getAll
}