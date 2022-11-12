const Persistencia = require('../dao/factory')

class ProductService {
    constructor(){
        this.userDao;
        this.init();
    }
    async init (){
        const {product} = await Persistencia.getPersistence();
        this.productDao=  user 
    }


    async findAll (){
        let resultado = await this.productDao.findAll()
        return resultado
    }

    async create (data){
        let resultado = await this.productDao.create(data)
        return resultado
    }

    async findByOne (data){
        let resultado = await this.productDao.findByOne(data)
        return resultado
    }
}

module.exports = new ProductService ()