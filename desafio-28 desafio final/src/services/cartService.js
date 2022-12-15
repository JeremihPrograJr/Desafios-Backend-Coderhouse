const Persistencia = require('../dao/factory')

class CartService {
    constructor(){
        this.cartDao;
        this.init();
    }
    async init (){
        const {cart} = await Persistencia.getPersistence();
        this.cartDao=  cart 
        console.log(cart)
    }


    async findAll (){
        let resultado = await this.cartDao.findAll()

        //let resultado = await this.cartDao.findAll()
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
    async findById (id){
        

        let resultado = await this.cartDao.findById(id)
       
        return resultado
    }
    async update (id,data){
        let resultado = await this.cartDao.update(id,data)
        return resultado
    }
    async remove (data){
        let resultado = await this.cartDao.remove(data)
        return resultado
    }
}

module.exports = new CartService ()