class UserDTO{
    constructor(user){
        this.name=user.name;
        this.last_name = user.last_name;
        this.full_name = `${user.name } ${user.last_name}`
        this.email  = user.email;
        this.age = user.age;
        this.phone = user.phone;
        this.adress = user.adress;
        this.avatar= user.avatar;
    }
}

module.exports= UserDTO