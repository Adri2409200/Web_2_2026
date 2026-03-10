//4.Dado un array de numeros,devuelve los que sean primos.
//Función Tradicional
function esPrimo(num){
    if(num<2)return false;
    for (let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
function numPrimo(num){
    let primos=[];
    for(let i=0;i<num.length;i++){
        let numero=num[i];

        if(esPrimo(numero)){
            primos.push(numero);
        }
    }
    return primos;
}
console.log(numPrimo([1,2,3,4,5,6,7,8,9]));
//Función Flecha
const esPrimo2=(num)=>{
    if(num<2)return false;
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
};
const numPrimo2=(num)=>num.filter(num=>esPrimo2(num));
console.log(numPrimo2([1,2,3,4,5,6,7,8,9]));