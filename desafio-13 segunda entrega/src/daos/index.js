
const config = require('../config/database')

function importarModulo (nombre_modulo,carpeta){

    try {
        let ruta = '../daos/'+carpeta+'/'+nombre_modulo+''+config.tipoBaseDato

      let ruta2=`${carpeta}/${nombre_modulo}${config.tipoBaseDato}`
    
      let  modulo2 = require(`../daos/${ruta2}`);
      //let modulo =require(`../daos/producto/productoDaoArchivo`)
        
        console.log(modulo2)
        return modulo2
        } catch (error) {
            console.log('No se encontro el tipo de persistencia:', nombre_modulo, error);
        }

    }

let carrito =  importarModulo('carritoDao','carrito')
let producto = importarModulo('productoDao','producto')



let carritoDao= new carrito()
let productoDao= new producto()



module.exports= { carritoDao,productoDao}