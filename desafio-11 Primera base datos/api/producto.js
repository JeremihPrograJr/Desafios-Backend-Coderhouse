const productos = require('../model/producto');

class ProductoController {

    constructor() { }

    async guardar(producto) {
        try {
            return await productos.guardar(producto);
        } catch (error) {
            throw error;
        }
    }
    async listar() {
        try {
            let data = await productos.listar()
            return data ;
        } catch (error) {
            throw error;
        }
    }
    async borrar(id) {
        try {
            return await productos.borrar(id);
        } catch (error) {
            throw error;
        }
    }
    async actualizar(id, producto) {
        try {
            return await productos.actualizar(id,producto);
        } catch (error) {
            throw error;
        }
    }
    async buscar(id) {
        try {
            return await productos.buscar(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductoController();