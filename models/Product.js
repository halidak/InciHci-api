const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./Comment');
const Like = require('./Like');


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    description: String,
    barCode: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Type'
    },
    company: {
        type: String,
        required: true
    },
    ratings: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Like'
    }],
    compositions: [{
        type: Schema.Types.ObjectId,
        ref: 'Composition'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

productSchema.pre('findOneAndDelete', async function (next) {
    const product = this;
    try {
      const productId = product._conditions._id;

      await Comment.deleteMany({ product: productId });
      await Like.deleteMany({ product: productId });

      next();
    } catch (error) {
      console.error('Error deleting associated data:', error);
      next(error);
    }
});


module.exports = mongoose.model('Product', productSchema);