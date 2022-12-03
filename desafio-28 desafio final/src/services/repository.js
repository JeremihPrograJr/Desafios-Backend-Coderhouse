const Persistencia = require('../dao/factory')

class Repository {
    constructor(daoc){
        this.dao;
        this.daoClass =daoc;
        console.log(daoc)
        this.init(daoc);
    }
    async init (clase){
        const {clase} = await Persistencia.getPersistence();
       
        this.dao=  clase 

        console.log(this.dao)
    }


    async findAll (){
        let resultado = await this.dao.findAll()
        return resultado
    }

    async create (data){
        let resultado = await this.dao.create(data)
        return resultado
    }

    async findByOne (data){
        let resultado = await this.dao.findByOne(data)
        return resultado
    }

    async findById(id){
        let resultado = await this.dao.findById({id})
        return resultado
    }
    async update (id,data){
        let resultado = await this.dao.update(id,data)
        return resultado
    }
    async remove (id){
        
        let resultado = await this.dao.remove(id)
        return resultado
    }
}

module.exports =  Repository 