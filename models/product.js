const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    detail: {
        type: String
    },
    stockDate: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

productSchema.methods.addProduct = function(productParam) {
    let product = new Product ({
        name: productParam.name,
        qty: productParam.qty,
        detail: productParam.detail,
        stockDate: productParam.stockDate,
        category: profuctParam.category
    })
    product.save();
}

Product = mongoose.model('Product', productSchema);                                                                                                               
module.exports = Product