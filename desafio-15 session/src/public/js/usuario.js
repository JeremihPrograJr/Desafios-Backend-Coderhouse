
console.log("hola")


const formCreateUser = document.getElementById('formRegister')

if (formCreateUser){
    formCreateUser.addEventListener('submit',evt => {
        evt.preventDefault()
        let data = new FormData(formCreateUser)
        let obj = {}
        data.forEach((value,key) => obj[key]=value)
        fetch('/api/user/create',{
            method:'Post',
            body: JSON.stringify(obj),
            headers:{
                'Content-Type':"application/json"
            },
        }).then((result)=> result.json())
        .then((json)=> {console.log(json)})
    
    })
}


const formLogUser = document.getElementById('formLogin')
if(formLogUser){
    console.log(formLogUser)
    formLogUser.addEventListener('submit',evt => {
        evt.preventDefault()
        let data = new FormData(formLogUser)
        let obj = {}
        data.forEach((value,key) => obj[key]=value)
        fetch('/api/user/login',{
            method:'Post',
            body: JSON.stringify(obj),
            headers:{
                'Content-Type':"application/json"
            },
        }).then((result)=> result.json())
        .then((json)=> {console.log(json)})
        .catch((error) =>  console.log("ee "+error))
    
    })
}

const btnLogout = document.getElementById('btnlogout')
if(btnLogout){
    btnLogout.addEventListener('click', evt => {
        fetch('/api/user/logout').then(result => console.log(result.json())).then(json=>console.log(json))
    } )
}

