
const config = require('../config/database')
const dotenv = require('dotenv');

//const ConectarMongo= require('../db/mongoDb/conectarMongo')


// obtengo la config del .env


function importarModulo (nombre_modulo,carpeta){

    try {
       // let ruta = '../daos/'+carpeta+'/'+nombre_modulo+''+config.tipoBaseDato

      let ruta2=`${carpeta}/${nombre_modulo}${config.tipoBaseDato}`
      console.log(ruta2)
    
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
let carritoDao,productoDao

    switch(config.tipoBaseDato){
        case 'Mongo': 
            require('../db/mongoDb/conectarMongo');
            dotenv.config();
            productoDao = new producto()
            carritoDao = new carrito()
            break
        
        case 'Firebase':
            
            require('../db/firebase/base-firebase.json')
            productoDao = new producto()
            carritoDao = new carrito()
            break
        default:
            console.log("entre aca")
            console.log(carrito)
         carritoDao= new carrito()
         productoDao= new producto()
            break      
    }
    



module.exports= { carritoDao,productoDao}