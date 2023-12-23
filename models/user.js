const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET_KEY, {expiresIn: "7d"});
    return token
}

const User = mongoose.model('user', userSchema);

const validate = (data) =>{
    const schema = Joi.object({
        fullName: Joi.string().required().label("Full Name"),
        email: Joi.string().email().required().label("Email"),
        phone: Joi.string().required().label("Phone"),
        password: passwordComplexity().required().label("Password"),
        address: Joi.string().required().label("address"),
    });
    return schema.validate(data)
};

module.exports = {User, validate};