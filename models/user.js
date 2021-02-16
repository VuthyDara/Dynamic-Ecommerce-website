const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    psw: {
        type: String,
        required: true
    },
    conpsw: {
        type: String,
        required: true
    }
});

userSchema.methods.register = function(userParam) {
    let user = new User ({
        uname: userParam.uname,
        email: userParam.email,
        psw: userParam.psw,
        conpsw:userParam.conpsw
    })
    user.save();
}



User = mongoose.model('User', userSchema);                                                                                                               
module.exports = User