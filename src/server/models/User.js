require('dotenv').config();
const { Schema, model } = require('mongoose');
const crypto = require('crypto');

const secret = process.env.SECRET_TOKEN;

const schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastlogin: { type: Date }, 
    age: { type: Number },
    country: { type: String }
},
{
    timestamps: true,
    toJSON:
    {
        transform: (doc, ret) =>
        {
            delete ret.password;
        }
    }
});

schema.methods.hashPassword = (password) =>
{
    const hash = crypto
        .createHmac('sha256', String(secret))
        .update(password)
        .digest('hex');
    return hash;
};

schema.methods.comparePassword = function (loginPassword)
{
    if(this.password !== this.hashPassword(loginPassword))
    {
        return false;
    }

    return true;
};

module.exports = model("User", schema, "users");
