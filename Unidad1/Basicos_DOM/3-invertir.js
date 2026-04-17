//3.Escribe una función que reciba un número y devuelva su versión invertida
//Funcion Tradicional
function inverNum(num){
    let numero=Math.abs(num);
let invert=0;
while(num>0){
    invert=(invert*10)+(num%10);
    num=Math.floor(num/10);
}
return invert;
}
console.log(inverNum(12345));
//Función Flecha
const numInvertido=(num)=>{
    let numero=Math.abs(num);
    let invert=0;
    while(num>0){
        invert=(invert*10)+(num%10);
        num=Math.floor(num/10);
    }
    return invert;
}
console.log(numInvertido(12345));
