const ciudades=new Array("Sucre","La paz","Santa Cruz","Beni","Pando","Oruro");
console.log(ciudades);
//array de manera abreviada
const paises=["Bolivia","Ecuador","Brasil","Venezuela","italia","Francia"];
let conteoCiudades=ciudades.length;
console.log(`El conteo total de las ciudades es ${conteoCiudades}`);

//ejercicios con Arrays

ciudades.shift();//eliminar 1er elemento
console.log(ciudades);
ciudades.pop();//Elimina el último elemento
console.log(ciudades);

console.log(paises.join("-"));//unifica los elementos e una cadena de acaracteres
console.log(paises.sort());//Ordenar carateres