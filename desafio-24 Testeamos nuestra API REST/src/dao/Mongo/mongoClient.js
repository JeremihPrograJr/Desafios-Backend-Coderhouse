const mongoDb = require('../../config/config').MONGO_URL_NUBE
const mongoose = require('mongoose')
class MongoClient {
    constructor(){
        
        this.connection = mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Conectado")
    }

    static getInstance (){
        if(!this.instance){
            this.instance= new MongoClient();
        }else{
            return this.instance
        }
    }
}

module.exports = MongoClient