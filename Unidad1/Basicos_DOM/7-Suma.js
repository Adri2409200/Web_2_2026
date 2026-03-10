// 7. Dado un array de objetos con valores numéricos, suma una propiedd específica en js super sencilla
//Funcion Tradicional
const frutas=[
    {nombre:"manzana",precio:200},
    {nombre:"platano",precio:150},
    {nombre:"uva",precio:300},
    {nombre:"naranja",precio:250}
];
function sumaPrecio(frutas){
    let total=0;
    for(let i=0;i<frutas.length;i++){
        total+=frutas[i].precio;
    }
        return total;
}
console.log(sumaPrecio(frutas));

//Funcion Flecha
const sumaPrecio2=(frutas)=>{
    let total=0;
    for(let i=0;i<frutas.length;i++){
        total+=frutas[i].precio;
    }
    return total;
};
console.log(sumaPrecio2(frutas));
