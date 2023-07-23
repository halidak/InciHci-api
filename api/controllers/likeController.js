const Product = require('../models/Product');
const Like = require('../models/Like');

const addLike = async (req, res) => {
    try {
        const productId = req.body.product;
        const userId = req.body.user;

        // Provjeri postoji li lajk s danim productId i userId
        const existingLike = await Like.findOne({ product: productId, user: userId });

        // Ako postoji lajk, obrisi ga
        if (existingLike) {
            await Like.findByIdAndDelete(existingLike._id);
            return res.json({ message: 'Like removed', like: existingLike });
        }

        // Ako ne postoji lajk, stvori ga i spremi u bazu
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const like = new Like({
            user: userId,
            product: productId
        });

        const result = await like.save();
        res.status(201).json({
            message: 'Like created',
            like: result
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error processing like',
            error: err
        });
    }
}


const getLikes = async (req, res) => {
    try {
        const productId = req.params.productId;

        console.log(productId);

        const likes = await Like.find({ product: productId });

        if (!likes) {
            return res.status(404).json({ message: 'Likes not found' });
        }

        res.json({
            likes: likes.length
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching likes',
            error: err
        });
    }
}

const removeLike = async (req, res) => {
    try {
        const productId = req.body.product;
        const userId = req.body.user;

        const like = await Like.findOneAndDelete({ product: productId, user: userId });

        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }

        res.json({
            message: 'Like removed',
            like: like
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error removing like',
            error: err
        });
    }
}

module.exports = {
    addLike,
    getLikes,
    removeLike
}