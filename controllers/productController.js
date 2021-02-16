const Product = require('../models/product');

exports.addProduct = (req, res, next) => {

    const name = req.body.name;
    const qty = req.body.qty;
    const detail = req.body.detail;
    const stockDate = req.body.stockDate;
    const category = req.body.category;

    const product = new Product({
        name: name,
        qty: qty,
        detail: detail,
        stockDate: stockDate,
        category: category
    });
    product.save()
        .then(result => {
            console.log('Email already exist');
            res.redirect('/signin');
        })
        .catch(err => {
            console.log('Email already exist');
            res.redirect('/signup');
        });
}