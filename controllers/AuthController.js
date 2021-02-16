const User = require('../models/user');

exports.register = (req, res, next) => {

    const uname = req.body.uname;
    const email = req.body.email;
    const psw = req.body.psw;
    const conpsw = req.body.conpsw

    const user = new User({
        uname: uname,
        email: email,
        psw: psw,
        conpsw:conpsw
    });
    user.save()
        .then(result => {
            console.log('Email already exist');
            res.redirect('/products');
        })
        .catch(err => {
            console.log('Email already exist');
            res.redirect('/products');
        });
}

exports.login = (req, res, next) => {
    const uname = req.body.uname;
    const psw = req.body.psw;

    res.send(`Username: ${uname} Password: ${psw}`);
}