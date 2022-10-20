

class Memoria {
    constructor(){
        this.data = []
        this.id =0
    }

    async create(newData){
       
                this.id+=1
                newData.id = this.id
               newData.timestamp = new Date().toLocaleString()
                this.data.push(newData)
                console.log(newData)
                
            return this.data

    }

    async findAll(){
        return  this.data
    }

    async findById(id){
        try {
            let result = this.data.find( (elem) => elem.id ==id)
            return result
        } catch (error) {
            return console.log(`existe problema al buscar por id: ${error.message}`)
        }
       
    }

    async update (id,newData){
        try {
            let id_producto = this.data.findIndex(elem => elem.id == id );
            console.log(id_producto)
            if(id_producto === -1 )return {error:"No se puede actualizar"};
            newData.id = id
            newData.timestamp =this.data[id_producto].timestamp
            return  this.data.splice(id_producto,1,newData)

        } catch (error) {
            return console.log(`existe problema al actualizar por id: ${error.message}`)
        }
       
    }

    async remove(id){
        try {
            let resultado = this.data.findIndex(elem => elem.id == id)
            return (resultado != -1 ) ?this.data.splice(resultado,1):{error:"No es posible borrar el producto"}
        } catch (error) {
            return console.log(`existe problema al borrar por id: ${error.message}`)

        }
        
    }
    
}


module.exports = Memoria