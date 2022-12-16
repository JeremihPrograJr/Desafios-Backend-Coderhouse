
const isAdmin =  async (req,res,next)=>{
    console.log('desde middle',req.session.user.rol)
    if(req.session.user.rol !== "admin"){
       return  res.status(401).send({
            error:-1,
            descripcion:`ruta`,
            metodo:` No autorizado`,
            ruta:req.originalUrl
        })
        
    }
    return next()
}



module.exports = {
        isAdmin 
}