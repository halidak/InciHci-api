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
    ratings: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }]
});

module.exports = mongoose.model('Product', productSchema);