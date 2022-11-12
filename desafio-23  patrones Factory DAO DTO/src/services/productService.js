const Persistencia = require('../dao/factory')

class ProductService {
    constructor(){
        this.productDao;
        this.init();
    }
    async init (){
        const {product} = await Persistencia.getPersistence();
        this.productDao=  product 
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

    async findById(id){
        let resultado = await this.productDao.findById(id)
        return resultado
    }
    async update (data){
        let resultado = await this.productDao.update(data)
        return resultado
    }
    async remove (data){
        let resultado = await this.productDao.remove(data)
        return resultado
    }
}

module.exports = new ProductService ()