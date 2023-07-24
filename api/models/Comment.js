const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User' // Referenca na User model
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = mongoose.model('Comment', commentSchema);