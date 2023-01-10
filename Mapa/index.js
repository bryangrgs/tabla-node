const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async ()=> {
    const busquedas = new Busquedas();
    let opt;
    do{
         opt = await inquirerMenu();

        switch(opt){
            case 1:
                //Mostrar mensaje
                const lugar= await leerInput('Ciuadad/lugar que desea buscar: ');
                console.log(lugar);

                //buscar los lugares

                // seleccionar el lugar

                //datos del clima relacionados

                // Mostrar resultados/informarcion
                console.log('\nInformacion de la ciudad\n'.green)
                console.log('Ciudad:',);
                console.log('Latitud',);
                console.log('Longitud',);
                console.log('Temperatura',);
                console.log('Temperatura minima',);
                console.log('Temperatura maxima',);
                break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);

    
}
main(); 