const knex = require('../migration/knex');


class Producto {

    constructor() { 

    }

    async guardar(producto) {
        try {
            console.log(producto)
            let resultado = await knex('productos').insert(producto);
            return resultado;
        } catch (error) {
            console.log(error)
            throw error;
          
        }
    }
    async listar() {
        try {
          let productos = await knex.from('productos').select('*')
           //let productos = await knex.select('*').from('productos')
           
            return productos;
        } catch (error) {
            throw error;
        }
    }
    
    async actualizar(id,producto) {
        try {
            let productos = await knex.from('productos').where('id', id).update(producto)
            return productos;
        } catch (error) {
            throw error;
        }
    }

    async borrar(id) {
        try {
            let productos = await  knex.from('productos').where('id', '=', id).del()
            return productos;
        } catch (error) {
            throw error;
        }
    }

    async buscar(id) {
        try {
            console.log("ID de producto " +id )
            let productos = await knex.from('productos').select('*').where('id', '=', id)
            return productos;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Producto();