
class UserMemory{
    
    constructor(){
        this.users =[]
    }

    async create (user){
        if (this.users.length === 0){
            user.id =1
        }else{
            this.users[this.users.length-1].id+1
        }
        this.users.push(user)
        return user
    }
    
    async getAll (){
        return this.users
    }

}

module.exports = UserMemory