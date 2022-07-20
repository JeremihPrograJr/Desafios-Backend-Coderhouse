const knex = require('../migration/knex');

class Mensaje {

    constructor() {

     }

    async guardar(mensaje) {
        try {
            console.log(mensaje.mensaje)
            console.log(mensaje.fecha)
            console.log(mensaje.email)
            let mensajenuevo ={
                mensaje : mensaje.mensaje,
                email : mensaje.email
            }
            let resultado = await knex('mensajes').insert(mensajenuevo);
            let contenido = await this.listar()

            return contenido;
        } catch (error) {
            throw error;
        }
    }
    async listar() {
        try {
            let mensajes = await knex.from('mensajes').select('*')
            return mensajes;
        } catch (error) {
            throw error;
        }
    }
    
    async actualizar(id,mensaje) {
        try {
            let mensajes = await knex.from('mensajes').where('id', id).update(mensaje)
            return mensajes;
        } catch (error) {
            throw error;
        }
    }

    async borrar(id) {
        try {
            let mensajes = await knex.from('mensajes').where('id', '=', id).del()
            return mensajes;
        } catch (error) {
            throw error;
        }
    }

    async buscar(id) {
        try {
            let mensajes = await knex.from('mensajes').select('*').where('id', '=', id)
            return mensajes;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Mensaje();