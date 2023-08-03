const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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



module.exports = mongoose.model('Product', productSchema);