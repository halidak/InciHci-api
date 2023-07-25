const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verificationCode: {
        type: Number,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    image: String,
    refreshCode: Number,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    ratings: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Like'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('User', userSchema);
