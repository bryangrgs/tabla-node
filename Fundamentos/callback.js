// setTimeout(function(){
//     console.log('Hola ')
// },1000); 
 const getUsuarioById=(id,callback)=>{
    const usuario={
        id,
        nombre: 'fernando'
    }
    setTimeout(()=>{
        callback(usuario)
    },1500)
 }
 getUsuarioById(10,(usuario)=>{
    // console.log(usuario.id);
    // console.log(usuario.nombre.toUpperCase());
 });

 // problemas comunes en callbacks
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
 //callback hell
 
 const getEmpleado=(id,callback)=>{
    const empleado=empleados.find(e => e.id ===id)?.nombre
    if (empleado){
        callback (null,empleado);
    }else{
        callback( `empleado con id ${id} no existe`);
    }
}
 const getSalario=(id,callback)=>{
    const salario= salarios.find(s => s.id === id)?.salario;
    if (salario){
        callback(null,salario);
    }else{
        callback(`no existe salario para el id ${id}`);
    }
 }

 const id= 3;
getEmpleado(id,(err,empleado)=>{
    if (err){
        console.log('ERROR!');
        return console.log(err);
    }
   
    getSalario(id,(err,salario)=>{
        if(err){
            return console.log(err);
        }
        console.log('el empleado:', empleado,'tiene un salario de :', salario)
    })
    
})


