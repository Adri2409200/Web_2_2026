//5. Escribe una función que convierta un número decimal a binario.
//Funcion Tradicional
function decBin(num){
    if(num===0)
        {return"0";}
    let neg=num<0;
    let numero=Math.abs(num);
    let bin="";
    while(numero>0){
        bin=(numero%2)+bin;
        numero=Math.floor(numero/2);
    }
    return neg<0?"-"+bin:bin;
}
console.log(decBin(87));
//Funcion Flecha
const decimalBinario=(num)=>{
    if(num===0){
        return "0";
    }
    let neg=num<0;
    let numero=Math.floor(Math.abs(num));
    let bin="";
    while(numero>0){
        bin=(numero%2)+bin;
        numero=Math.floor(numero/2);
    }
    return neg?"-"+bin:bin;
}
console.log(decimalBinario(87));
