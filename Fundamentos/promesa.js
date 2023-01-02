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
 //transformar en promesa el get empelado de callbackhell
 const getEmpleado=(id)=>{
    
    // const promesa= buscamos optimizar el codigo
      return new Promise((resolve,reject)=>{
        const empleado=empleados.find(e => e.id ===id)?.nombre;
        // if simplificamos con un ternario e eliminamos el else
        ( empleado)
            ? resolve(empleado)
            :reject(`no existe empleado con id ${id}`);
        

    });
    // return promesa; buscamos optimizar el codigo
}
const getSalario =(id) =>{
return new Promise((resolve,reject)=> {
    const salario= salarios.find(s=> s.id ===id)?.salario;
    (salario)
    ?resolve(salario)
    :reject(` no existe salario con el id ${id}`)
});
}
const id= 3;
// getEmpleado(id)
// .then (empleado => console.log(empleado))
// .catch(err=> console.log (err));

// getSalario(id)
// .then (salario => console.log(salario))
// .catch(err=> console.log (err));
let nombre;
 getEmpleado(id)
 .then (empleado =>{
    nombre= empleado;
    return getSalario(id)
 })
 .then ( salario => 
    console.log('el empleado:',nombre,'tiene un salario de: ',salario))
    .catch (err => console.log(err));