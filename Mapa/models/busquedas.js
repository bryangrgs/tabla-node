class Busquedas{

    historial = ['tegucigalpa','Madrid','San josé'];
    constructor(){
        //TODO : leer db si existe
    }
    // primer metodo para buscar ciudad async 
    //por peticion http a algun servicio
    async ciudad( lugar= ''){
        // peticion http
        console.log(lugar);
        // va a regresar un arreglo 
        //con todas las ciudades que coincidan
        return[]; // retornar los lugares
    }
}

module.exports = Busquedas;