const Crud = require('./repository')
//const config = require('../config/database')


class UserDaoArchivo extends Crud {
    constructor() {
      super('user');
    }
  }

module.exports = UserDaoArchivo