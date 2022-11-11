const config = require('../config/config')
const MongoClient = require('./Mongo/mongoClient')
const PERSISTENCE =config.PERSISTENCIA

class Factory{
 
    static async getPersistence (){
        switch(PERSISTENCE){
            case "MEMORY":
            let userDaoMemoria = await require('./Memory/user.dao')
            console.log("MEMORIA")
          
            return{ user : new userDaoMemoria() }
            
            case "FILESYSTEM":
             let userDaoFileSystem  = await require('./Memory/user.dao')
             console.log("FileSystem")

             return new userDaoFileSystem

            case "MONGO":
            const connection = MongoClient.getInstance();
            let userDaoMongo = await require('./Mongo/user.dao')
            let cartDaoMongo = await require('./Mongo/cart.dao')
            let productDaoMongo= await require('./Mongo/product.dao')
            return {
                user : new userDaoMongo(),
                cart: new cartDaoMongo(),
                product : new productDaoMongo()
            }
        }
    }
}

module.exports = Factory
