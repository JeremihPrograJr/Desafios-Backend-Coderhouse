const mongoose = require('mongoose')

const schema = mongoose.Schema({
    email:{type:String,max:400},
    estado:{ type: String,max:400},
    fecha :{ type: Date, default: new Date()},
    items:{type: []},
    productos:{ type: [] },
    numero_orden:{type:String,max:400}
    
})


module.exports = schema