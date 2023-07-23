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
    }]
})

module.exports = mongoose.model('User', userSchema);
