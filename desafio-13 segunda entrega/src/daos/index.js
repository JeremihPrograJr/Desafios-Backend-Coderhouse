
const config = require('../config/database')
const dotenv = require('dotenv');
dotenv.config()

function importarModulo (nombre_modulo,carpeta){

    try {
      let ruta2=`${carpeta}/${nombre_modulo}${config.tipoBaseDato}`
      console.log(ruta2)
      let  modulo2 = require(`../daos/${ruta2}`);

      if(process.env.BASE_DATOS == 'Mongo'){
        require('../db/mongoDb/conectarMongo');
      }
      if (process.env.BASE_DATOS == 'Firebase'){
        require('../db/firebase/base-firebase.json')
      }
        
        console.log(modulo2)
        return modulo2
        } catch (error) {
            console.log('No se encontro el tipo de persistencia:', nombre_modulo, error);
        }

    }


let carrito =  importarModulo('carritoDao','carrito')
let producto = importarModulo('productoDao','producto')
let carritoDao,productoDao

//importando clases
carritoDao= new carrito()
productoDao= new producto()
 



module.exports= { carritoDao,productoDao}