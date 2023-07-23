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

const getById = async (req, res) => {
    try {
        const productId = req.params.productId;
        console.log('Product ID:', productId);
        const product = await Product.findById(productId);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch(err) {
        res.status(500).json({
            message: 'Error fetching product',
            error: err
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully', deletedProduct });
     } catch(err) {
        res.status(500).json({
            message: 'Error deleting product',
            error: err
        });
    }
}

const updateById = async (req, res) => {
    try {
        const productId = req.params.productId;
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            req.body,
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product updated successfully', updatedProduct });
    } catch(err) {
        res.status(500).json({
            message: 'Error updating product',
            error: err
        });
    }
}

module.exports = {
    addProduct,
    getAll,
    getById,
    deleteProduct,
    updateById
}