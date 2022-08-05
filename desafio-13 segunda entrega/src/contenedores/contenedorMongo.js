
const mongoose = require('mongoose');


class MongoCRUD {

    constructor(collection,schema) {
        this.model = mongoose.model(collection, schema);
        console.log(collection)
        console.log(this.model)
    }

 
    getModel() {
        return this.model;
    }

 
    async create(data) {
        return this.model.create(data);
    }


    async findById(id) {
        let resultado = await this.model.findById(id)
        console.log(resultado)
        return  !resultado ? {"error":"No hay producto con esta id"}: resultado;
    }


    async findAll() {
        let resultado = await this.model.find({})

        console.log(typeof resultado)

        return resultado.length <=0 ?{"error":"No hay productos"}:resultado ;
    }


   async update(id, data) {
        let resultado =  await this.model.findById(id)
        if (!resultado){
            return {"error":"No se encontro el producto"}
        }

        return this.model.findByIdAndUpdate(id, data);
    }

 
     async remove(id) {
        console.log(id)
        console.log(typeof id)
        let resultado = await this.model.findById(id)
        console.log(resultado)
        return !resultado ? {"error":"No hay producto con esta id"}: this.model.findByIdAndDelete(id);
    }
}

module.exports = MongoCRUD;