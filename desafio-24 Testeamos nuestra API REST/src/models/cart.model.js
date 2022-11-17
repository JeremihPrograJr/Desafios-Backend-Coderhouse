const mongoose = require('mongoose');
const Producto = require('./product.model');

const schema = mongoose.Schema({
    timestamp: { type: Date, default: new Date() },
    /*productos:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'productos' }]*/
    productos: {type:[Producto], required:true}
});



//const Carrito = mongoose.model('carritos', schema);

module.exports = schema;