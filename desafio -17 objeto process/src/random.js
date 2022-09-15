let sum = 0;

function obtenerRandom( ){
    return Math.floor(Math.random() * (1000 - 1) + 1);
   // return Math.round(Math.random() *(final-1))+1;
}
let resultado={}
process.on('message', cantidad => {
  
    console.log(`numero randoms ${cantidad}`);
    for (let i = 0; i < cantidad; i++) {
        let numero= obtenerRandom(cantidad)
        if( resultado[numero] == undefined || resultado[numero] == null){
            resultado[numero] = 1
        }else{
            resultado[numero] = resultado[numero] +1
        }
    }

    process.send(resultado);
});