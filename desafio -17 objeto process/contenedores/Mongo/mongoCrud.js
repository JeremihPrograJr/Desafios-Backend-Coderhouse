
const mongoose = require('mongoose');


class MongoCrud{
        constructor(collection,schema) {
            this.model = mongoose.model(collection, schema);
            console.log(collection)
            console.log(this.model)
        }
    
     
        getModel() {
            return this.model;
        }
    
     
        async create(data) {
            console.log(this.model)
            console.log(data)
            return this.model.create(data);
        }
    
    
        async findById(id2) {
        let data  =  await this.findAll();
       
        let resultado =  data.find((el) => el._id == id2)
            
        return   resultado;
        }
    
    
        async findAll() {
            let resultado = await this.model.find({})
    
            return resultado.length <=0 ?{"error":"No hay nada"}:resultado ;
        }
    
    
       async update(id, data) {
            let resultado =  await this.model.findById(id)
            if (!resultado){
                return resultado 
            }
    
            let dato  = await this.model.findOneAndUpdate(
                { _id: id },
                {...data },
                { new: true },
              );
        
             
            return dato;
        }
    
     
         async remove(id) {
       
            let resultado = await this.model.findById(id)
            console.log(resultado)
            return !resultado ? {"error":"No hay elemento con esta id"}: this.model.findByIdAndDelete(id);
        }

        async findOne(data,projection){

           // let resultado = await this.model.findOne({$and:data},projection)
           let resultado = await this.model.findOne(data,projection)
            return resultado
        }

        async findEmail (data){
            let resultado = await this.model.findOne(data)
            return resultado
        }
        
    }
    



module.exports = MongoCrud