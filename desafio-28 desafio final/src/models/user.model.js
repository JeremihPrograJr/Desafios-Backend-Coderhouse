const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email: { type: String, max: 400 },
    name: { type: String, max: 400 },
    last_name: { type: String, max: 400 },
    age: { type: Number, max: 400 },
    cart:{type:[],required:true},
    phone: { type: String, max: 400 },
    alias: { type: String, max:400 },
    avatar: { type: String,max:400} ,
    password: { type: String,max:500},
    adress: { type: String,max:500}  }
    ,{timestamps:true});



module.exports = schema;