const formCreateUser = document.getElementById('formRegister')
if (formCreateUser){
    formCreateUser.addEventListener('submit',evt => {
        evt.preventDefault()
        let data = new FormData(formCreateUser)
        let obj = {}
        data.forEach((value,key) => obj[key]=value)
        console.log(obj)
      fetch('/api/user/create',{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(obj)
      })
      .then((response)=>response.json())
      .then((json)=>{
        if(json.status === 'success'){
        window.location.href = 'login'
        }else{
          console.log('something went wrong :(')
           console.log(json)
           Swal.fire(
            json.error,
            'Ocurrio un problema al registar el correo!',
            'error'
          )
           //window.location.href = 'failregister'
        }
        
      }).catch(e=>console.log(e))
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
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(obj)
          })
          .then((response)=>response.json())
          .then((json)=>{
            if(json.status === 'success'){
            window.location.href = 'home'
            }else{
              console.log('something went wrong :(')
              console.log(json)
            }
          }).catch(e=>console.log(e))
        /*
        fetch('/api/user/login',{
            method:'Post',
            body: JSON.stringify(obj),
            headers:{
                'Content-Type':"application/json"
            },
        }).then((result)=> result.json())
        //.then((json)=>{if (json.status == 'sucess')window.location.href = 'https://localhost:8080/home'})
        .catch((error) =>  console.log("ee "+error))
    */

    })
}

const btnLogout = document.getElementById('btnlogout')

if(btnLogout){
    console.log(btnLogout)
    btnLogout.addEventListener('click', evt => {
        
        fetch('/api/user/logout').then(result => console.log(result.json()))
        .then(json=> console.log(json))
        .catch(error => (console.log(error)));
    } )
    
}