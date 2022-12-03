const config = require('../config/config')
const MongoClient = require('./Mongo/mongoClient')
const PERSISTENCE =config.PERSISTENCIA

class Factory{
 
    static async getPersistence (){
        switch(PERSISTENCE){
            case "MEMORY":
            let userDaoMemoria = await require('./Memory/user.dao')
            let cartDaoMemoria = await require('./Memory/cart.dao')
            let productDaoMemoria = await require('./Memory/product.dao')
            console.log("MEMORIA")
          
            return{ user : new userDaoMemoria(),
                    cart: new cartDaoMemoria(),
                    product : new productDaoMemoria()}
            case "FILESYSTEM":
             let userDaoFileSystem  = await require('./File/user.dao')
             let cartDaoFileSystem  = await require('./File/cart.dao')
             let productDaoFileSystem  = await require('./File/product.dao')
             console.log("FileSystem")

                return{ user : new userDaoFileSystem(),
                        cart: new cartDaoFileSystem(),
                        product : new productDaoFileSystem()}
        

            case "MONGO":
            const connection = MongoClient.getInstance();
            let userDaoMongo = await require('./Mongo/user.dao')
            let cartDaoMongo = await require('./Mongo/cart.dao')
            let productDaoMongo= await require('./Mongo/product.dao')
            let messageDaoMongo= await require('./Mongo/message.dao')
            return {
                user : new userDaoMongo(),
                cart: new cartDaoMongo(),
                product : new productDaoMongo(),
                message: new messageDaoMongo()
            }
        }
    }
}

module.exports = Factory
