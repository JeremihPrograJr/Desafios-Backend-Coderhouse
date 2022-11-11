class Memoria {
    constructor(){
        this.users =[]      
    }

    async create (user){
        console.log(user)
        if (this.users.length === 0){
            user._id =1
        }else{
            this.users[this.users.length-1]._id+1
        }
        
        this.users.push(user)
        return user
    }

    async findAll(){
        return  this.users
    }

    async findByOne(id){
        try {
            let result = this.users.find( (elem) => elem.id ==id)
            return result
        } catch (error) {
            return console.log(`existe problema al buscar por id: ${error.message}`)
        }
       
    }

    async update (id,newData){
        try {
            let id_producto = this.users.findIndex(elem => elem.id == id );
            
            if(id_producto === -1 )return {error:"No se puede actualizar"};
            newData._id = id
            newData.timestamp =this.data[id_producto].timestamp
            return  this.data.splice(id_producto,1,newData)

        } catch (error) {
            return console.log(`existe problema al actualizar por id: ${error.message}`)
        }
       
    }

    async remove(id){
        try {
            let resultado = this.users.findIndex(elem => elem.id == id)
            return (resultado != -1 ) ?this.users.splice(resultado,1):{error:"No es posible borrar el producto"}
        } catch (error) {
            return console.log(`existe problema al borrar por id: ${error.message}`)

        }
        
    }
}


module.exports = Memoria