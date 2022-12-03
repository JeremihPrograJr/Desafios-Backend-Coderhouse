const mongoose = require('mongoose')

const schema = mongoose.Schema({
    email:{type:String,max:400},
    description:{ type: String,max:400},
    fecha :{ type: Date, default: new Date() }
})


module.exports = schema