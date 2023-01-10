//  en la carpeta models 
// guardaremos las clases encargadas 
// de trabajar la logica del negocio

const { v4: uuidv4 }= require('uuid');
 class Tarea {
    id='';
    desc='';
    completadoEn=null;
    constructor(desc){
        this.id= uuidv4();
        this.desc = desc;
        this.completadoEn=null;
        
        

    }


 }
 module.exports = Tarea;