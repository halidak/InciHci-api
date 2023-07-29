const Composition = require('../models/Composition');
const Product = require('../models/Product');

const addComposition = async (req, res) => {
    try {
        const { name, product } = req.body;

        // Kreirajte novu Composition objekat sa prosleđenim podacima
        const composition = new Composition({
            name,
            product
        });

        // Sačuvajte novu kompoziciju u bazi
        const savedComposition = await composition.save();

        await Product.findByIdAndUpdate(product._id, { $push: { compositions: savedComposition._id } });

        res.status(201).json({
            message: 'Composition created',
            composition: savedComposition
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error creating composition',
            error: err
        });
    }
};

const getAllCompositionsForProduct = async (req, res) => {
    try {
        const productId = req.params.productId;

        const compositions = await Composition.find({ product: productId });

        res.json(compositions);
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching compositions',
            error: err
        });
    }
};

module.exports = {
    addComposition,
    getAllCompositionsForProduct
}