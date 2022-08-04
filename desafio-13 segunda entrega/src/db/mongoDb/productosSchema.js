const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: { type: String, max: 400 },
    descripcion: { type: String, max: 400 },
    codigo: { type: Number, max: 400 },
    foto: { type: String, max: 400 },
    precio: { type: Number },
    stock: { type: Number},
    timestamp: { type: Date, default: new Date() }
});



module.exports = schema;