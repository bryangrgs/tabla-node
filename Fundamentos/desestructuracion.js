const deadpool={
    nombre:'Wade',
    apellido:'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return`${this.nombre} ${this.apellido} ${this.poder}`    
    }
}
//forma larga
// const nombre = deadpool.nombre
// const apellido = deadpool.apellido
// const poder = deadpool.poder
 
//desestructuracion
// const {nombre,apellido,poder}= deadpool;
// console.log(nombre,apellido,poder)

// function imprimeHeroe(heroe){
//     const {nombre,apellido,poder,edad=0}= heroe;
//     console.log(nombre,apellido,poder,edad)

// }
// imprimeHeroe(deadpool);
function imprimeHeroe({nombre,apellido,poder,edad=0}){
    console.log(nombre,apellido,poder,edad)
}
// imprimeHeroe(deadpool);
const heroes=['deadpool','Superman','Batman'];
// const h1= heroes[0];
// const[h1,h2,h3]=heroes;
//cuando me interesa solo uno
const[,,h3]=heroes;
console.log(h3);