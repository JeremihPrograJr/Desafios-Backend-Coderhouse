const Persistencia = require('../dao/factory')

class OrderService {
    constructor(){
        this.ordertDao;
        this.init();
    }
    async init (){
        const {cart} = await Persistencia.getPersistence();
        this.ordertDao=  cart 
        console.log(cart)
    }


    async findAll (){
        let resultado = await this.ordertDao.findAll()

        //let resultado = await this.cartDao.findAll()
        return resultado
    }

    async create (data){
        let resultado = await this.ordertDao.create(data)
        return resultado
    }

    async findByOne (data){
        let resultado = await this.ordertDao.findByOne(data)
        return resultado
    }
    async findById (id){
        

        let resultado = await this.ordertDao.findById(id)
       
        return resultado
    }
    async update (id,data){
        let resultado = await this.ordertDao.update(id,data)
        return resultado
    }
    async remove (data){
        let resultado = await this.ordertDao.remove(data)
        return resultado
    }
}

module.exports = new OrderService ()