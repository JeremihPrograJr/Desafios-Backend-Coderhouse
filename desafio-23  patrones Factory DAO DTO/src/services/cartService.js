const Persistencia = require('../dao/factory')

class CartService {
    constructor(){
        this.userDao;
        this.init();
    }
    async init (){
        const {cart} = await Persistencia.getPersistence();
        this.cartDao=  user 
    }


    async findAll (){
        let resultado = await this.cartDao.findAll()
        return resultado
    }

    async create (data){
        let resultado = await this.cartDao.create(data)
        return resultado
    }

    async findByOne (data){
        let resultado = await this.cartDao.findByOne(data)
        return resultado
    }
}

module.exports = new CartService ()