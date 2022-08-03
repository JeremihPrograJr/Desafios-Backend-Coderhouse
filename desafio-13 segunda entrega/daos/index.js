
function importarModulo (nombre_modulo){

 let baseDato = process.env.Base_Datos

    try {
        let  modulo = require(`../Contenedores/${nombre_modulo}${baseDato}`);
        console.log(nombre_modulo)
        console.log(modulo)
        return modulo
        } catch (error) {
            console.log('No se encontro el tipo de persistencia:', nombre, error);
        }

    }

let carritoDao = importarModulo('carritoDao')
let productoDao = importarModulo('productoDao')

export {carritoDao,productoDao}