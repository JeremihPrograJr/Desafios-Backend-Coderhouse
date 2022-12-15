const mongoose = require('mongoose');


class MongoCRUD {

    constructor(collection,schema) {
        this.model = mongoose.model(collection, schema);
        //console.log(collection)
        //console.log(this.model)
    }

 
    getModel() {
        return this.model;
    }

 
    async create(data) {
        
        return this.model.create(data);
    }


    async findById(id) {

        let data  =   await this.findAll();
       
        let resultado =   data.find((e) => e._id == id);
        
        return   resultado;
    }


    async findAll() {
        

        let resultado = await this.model.find({})
        return resultado
        //return resultado.length <=0 ?{"error":"No hay nada"}:resultado ;
    }
    async findByOne(data) {
        let resultado = await this.model.findOne(data)
        return resultado;
    }

   async update(id, data) {
        //verificamos si existe
        let resultado =  await this.model.findById(id)
        
        if (!resultado){
            return resultado //enviamos el return(que valor retornado sera undefined o null)
        }
        
        let dato  = await this.model.findOneAndUpdate(
            { _id: id },
            {...data },
            { new: true },
          );
    
         
        return dato;
    }

 
    async findEmail(email){
        let resultado = await this.model.findOne(email)
        return resultado;
    }

     async remove(id) {
        
        let resultado = await this.model.findByIdAndDelete(id)
        return resultado
        //return !resultado ? {"error":"No hay producto con esta id"}: this.model.findByIdAndDelete(id);
    }
}

module.exports = MongoCRUD;