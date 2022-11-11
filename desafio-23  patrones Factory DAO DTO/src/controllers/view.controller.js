
const INDEX =(req,res) =>{
    res.render('index')
}

const HOME =(req,res) =>{
    if(!req.session.user){
        return res.redirect('login')
      } 
       const {email,name,last_name,age,phone,alias,avatar,
       adress} = req.session.user
   
       res.render('perfil_usuario',{
          email,name,
           last_name,age,phone,alias,adress})
}

const LOGIN =(req,res) => {
    if(req.session.user){
        req.logger.error(`inicio de session activa : ${req.session.user.name} `)
        return res.redirect('http://localhost:8080/home')
     }
    res.render('login')
}

const REGISTER =(req,res) => {
    if(req.session.user) {
        req.logger.info(`session activa : ${req.session.user.name} `)
        return res.redirect('http://localhost:8080/home')
    }
    res.render('register')
}
module.exports = {
    INDEX,
    LOGIN,
    HOME,
    REGISTER
}
