const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const compositionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = mongoose.model('Composition', compositionSchema);