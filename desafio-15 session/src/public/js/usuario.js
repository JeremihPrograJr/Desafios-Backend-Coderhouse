console.log("hola")

const formCreateUser = document.getElementById('formLogin')
formCreateUser.addEventListener('submit',evt => {
    evt.preventDefault()
    let data = new FormData(formCreateUser)
    let obj = {}
    data.forEach((value,key) => obj[key]=value)
    fetch('/api//user/create',{
        method:'Post',
        body: JSON.stringify(obj),
        headers:{
            'Content-Type':"application/json"
        }
    }).then((result)=> result.json()).then((json)=> {console.log(json)})

})