require('colors');
const { guardarDB,leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
    pausa,
    leerInput,
listadoTareasBorrar,
confirmar,
mostrarListadoCheckList} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');



const main = async()=> {
 
    let opt='';
    const tareas= new Tareas();

    const tareasDB= leerDB();
    if(tareasDB){
        //establecer tareas
        tareas.cargarTareasFromArray(tareasDB);
    }
    

    //imprimir el menu
    do{
         opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);

                break;

                case'2':
                tareas.listadoCompleto();

                break;
                case'3': // listar completadas
                tareas.listarPendientesCompletadas(true);

                break;
                case'4': // listar pendientes
                tareas.listarPendientesCompletadas(false);

                break;
                case'5': // Completado | pendiente
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);

                break;
                case'6': // Borrar
                const id = await listadoTareasBorrar( tareas.listadoArr);
                if(id !== '0'){
                    const ok= await confirmar('¿Está seguro?');
                if (ok ){
                    tareas.borrarTarea(id);
                    console.log('\n')
                    console.log('Tarea borrada '.red)
                    }

                }
                
                break;
        
         
        }
        guardarDB(tareas.listadoArr);
        await pausa();
       
    } while(opt !== '0');
    
    
}
main();