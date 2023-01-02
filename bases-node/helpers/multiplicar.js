const fs =  require('fs');
const colors= require('colors');
// return new Promise((resolve,reject)=> {
// const crearArchivo =(base=5)=>{
    const crearArchivo = async (base=5, listar= false, hasta=10)=>{
    try {
    let salida, consola='';
    for ( let i= 1; i<=hasta; i++){
        salida += `${base} x ${i}  = ${base*i}\n`;
        consola += `${base} ${'x'.green} ${i}  ${'='.red} ${base*i}\n`;

    // resolve(`tabla-${base}.txt `) ;  
 
    }
    if (listar){
         console.log("===========".green);
         console.log(`tabla del  : ${colors.black(base)}`.bgRed);
         console.log("===========".green);  
         console.log(consola);
  }

 
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    return(`tabla-${base}.txt `) ;  
    } catch (error) {
        throw error;
    }
    
    }
   
    

module.exports= { crearArchivo}