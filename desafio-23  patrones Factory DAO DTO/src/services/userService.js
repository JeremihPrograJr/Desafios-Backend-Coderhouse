const { initialize } = require('passport')
const Persistencia = require('../dao/factory')

class UserService {
    constructor(){
        this.userDao;
        this.init();
    }
    async init (){
        const {user} = await Persistencia.getPersistence();
        this.userDao=  user 
    }


    async findAll (){
        let resultado = await this.userDao.findAll()
        return resultado
    }

    async create (user){
        let resultado = await this.userDao.create(user)
        return resultado
    }

    async findByOne (data){
        let resultado = await this.userDao.findByOne(data)
        return resultado
    }
}

module.exports = new UserService ()