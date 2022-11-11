const config = require('../config/config')
const PERSISTENCE =config.PERSISTENCIA

class Factory{
 
    static async getPersistence (){
        switch(PERSISTENCE){
            case "MEMORY":
            let userDaoMemoria = await require('./Memory/user.dao')
            return new userDaoMemoria
            
            case "FILESYSTEM":
             let userDaoFileSystem  = await require('./Memory/user.dao')
             return new userDaoFileSystem
             
        }
    }
}

module.exports = Factory
