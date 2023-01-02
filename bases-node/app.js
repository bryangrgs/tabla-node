//documentacion de yargs internet
// const { argv } = require('process');

const{crearArchivo}= require('./helpers/multiplicar');
const colors= require('colors');
const argv= require('./config/yargs');
console.clear();




//modo de ejemplo pero no es bueno en la practica 
// const[ , ,arg3='base=5']= process.argv;
//desestructurar
// const[,base=5]=arg3.split('=');

// const base=5;


// fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
//     if (err) throw err;
//     console.log(`tabla-${base}.txt`);
// })


  crearArchivo(argv.b,argv.l,argv.h)
  .then(nombreArchivo=> console.log(nombreArchivo.rainbow,'creado'))
 .catch(err=> console.log(err));