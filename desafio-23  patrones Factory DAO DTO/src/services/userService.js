const userDao = require('../dao/Memory/user.dao')

class UserService {
    constructor(){
        this.userDao = new userDao
    }
    async getUsers (){
        let resultado = await this.userDao.getAll()
        return resultado
    }

    async addUser (user){
        let resultado = await this.userDao.save()
        return resultado
    }
}

module.exports = UserService