const Mensaje = require('../model/mensaje');

class MensajeController {

    constructor() { }

    async guardar(mensaje) {
        try {
            return await Mensaje.guardar(mensaje);
        } catch (error) {
            throw error;
        }
    }
    async listar() {
        try {
            return await Mensaje.listar();
        } catch (error) {
            throw error;
        }
    }
    async borrar(id) {
        try {
            return await Mensaje.borrar(id);
        } catch (error) {
            throw error;
        }
    }
    async actualizar(id,mensaje) {
        try {
            return await Mensaje.actualizar(id,mensaje);
        } catch (error) {
            throw error;
        }
    }
    async buscar(id) {
        try {
            return await Mensaje.buscar(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new MensajeController();