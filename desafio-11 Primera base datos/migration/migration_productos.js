const knex = require('../migration/knex');

knex.schema.createTable('productos', table => {
    table.increments('id');
    table.string('title');
    table.string('description');
    table.integer('code');
    table.integer('price')
    table.string('thumbnail');
    table.integer('stock');
    table.timestamp('date', { useTz: true }).notNullable().defaultTo(knex.fn.now());
}).then(() => {
    console.log('tabla productos creada!');
}).catch(error => {
    console.log('error:', error);
    throw error;
}).finally(() => {
    console.log('cerrando conexion...');
    process.exit(0);
});