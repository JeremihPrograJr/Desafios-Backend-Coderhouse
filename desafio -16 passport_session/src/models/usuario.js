const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: { type: String, max: 400 },
    name: { type: String, max: 400 },
    last_name: { type: String, max: 400 },
    age: { type: Number, max: 400 },
    alias: { type: String, max:400 },
    avatar: { type: String,max:400} ,
    password: { type: String,max:400} }
    ,{timestamps:true});



module.exports = schema;