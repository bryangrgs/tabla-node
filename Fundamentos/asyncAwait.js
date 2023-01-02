const empleados=[
    {
        id:1,
        nombre: 'fernando'
    },
    { id:2,
        nombre: 'Linda'},
    {
        id:3,
        nombre: 'Karen'
    }

 ];
 const salarios=[
    {
        id:1,
        salario: 1500
    },
    { id:2,
        salario: 2000},
    {
        id:3
    }
 

 ];
 const getEmpleado=(id)=>{
    
    // const promesa= buscamos optimizar el codigo
      return new Promise((resolve,reject)=>{
        const empleado=empleados.find(e => e.id ===id)?.nombre;
        // if simplificamos con un ternario e eliminamos el else
        ( empleado)
            ? resolve(empleado)
            :reject(`no existe empleado con id ${id}`);
        

    });
}
const getSalario =(id) =>{
return new Promise((resolve,reject)=> {
    const salario= salarios.find(s=> s.id ===id)?.salario;
    (salario)
    ?resolve(salario)
    :reject(` no existe salario con el id ${id}`)
});
}
const getInfoUsuario = async(id)=>{
    try{
        const empleado= await getEmpleado(id);
    const salario= await getSalario(id);
    return ` el salario del empleado ${empleado} es de ${salario}`;
    }catch(error){
        throw error;
    }
    

}
const id=4;
getInfoUsuario(id)
.then(msg=> console.log(msg))
.catch(err => console.log(err));
//await debe usarse dentro de una funcion o metodo asincrono