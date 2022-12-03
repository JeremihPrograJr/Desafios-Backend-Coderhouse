const Persistencia = require('../dao/factory')

class MessageService {
    constructor(){
        this.messageDao;
        this.init();
    }
    async init (){
        const {message} = await Persistencia.getPersistence();
       
        this.messageDao=  message 
    }


    async findAll (){
        let resultado = await this.messageDao.findAll()
        return resultado
    }

    async create (data){
        let resultado = await this.messageDao.create(data)
        return resultado
    }

    
    async update (data){
        let resultado = await this.messageDao.update(data)
        return resultado
    }
    async remove (data){
        let resultado = await this.messageDao.remove(data)
        return resultado
    }
}

module.exports = new MessageService ()