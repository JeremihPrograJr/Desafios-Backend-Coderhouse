const mongoose = require('mongoose');
const usuarioSchema = require('./usuario')


const schema = mongoose.Schema({
    mensaje: { type: String, max: 400 },
    author: {type:usuarioSchema, required:true},
    timestamp: { type: Date, default: new Date() }
});



module.exports = schema;