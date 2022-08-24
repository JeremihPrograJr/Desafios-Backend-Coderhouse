const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: { type: String, max: 400 },
    nombre: { type: String, max: 400 },
    apellidos: { type: String, max: 400 },
    edad: { type: Number, max: 400 },
    alias: { type: String, max:400 },
    avatar: { type: String,max:400},
    timestamp: { type: Date, default: new Date() }
});



module.exports = schema;