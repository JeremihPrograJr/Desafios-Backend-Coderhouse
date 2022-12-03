const MessageService = require('../services/messageService')


const CREATE =async (req,res) => {
    try {
        const {email,description} = req.body
        console.log(req.body)
        if(!email || !description){
            return res.status(400).send({error:"faltan completar datos"})
        }
        const result = await MessageService.create(req.body)
       res.status(200).send({status:'sucess',payload:result})
      // res.send(result)
    } catch (error) {
        
    }
}
const READ =async (req,res) => {
    try {
        const result = await MessageService.findAll();
        res.send(result)
    } catch (error) {
        
    }
}
const UPDATE =async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}



module.exports ={
    CREATE,
    READ,
    UPDATE
}