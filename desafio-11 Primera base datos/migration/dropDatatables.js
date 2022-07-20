const knex = require('../migration/knex');


(async ()=>{

   await  knex.schema.dropTable('mensajes');
   await knex.schema.dropTable('productos');
    
  

})()