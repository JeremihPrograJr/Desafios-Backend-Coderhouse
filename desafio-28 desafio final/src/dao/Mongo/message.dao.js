const CRUD = require('./repository')
const MessageSchema = require('../../models/message.model')

class MessageDaoMongo extends CRUD{
    constructor(){
        super('message',MessageSchema)
    }

}

module.exports = MessageDaoMongo