// 6. Encontrar el número que más se repite en un array
//Función Tradicional
function numRep(num){
    let cont={};
    for(let i=0;i<num.length;i++){
        let numero=num[i];
    if(cont[numero]){
        cont[numero]++;
    }else{
        cont[numero]=1;
    }    
}
let maxNum=num[0];
let maxFrec=1;
for(let numero in cont){
    if(cont[numero]>maxFrec){
        maxFrec=cont[numero];
        maxNum=Number(numero);
    }
}
return maxNum
}
console.log(numRep([1,1,1,2,3,4,5,6,6,3,6,9,8]));
//Funcion Flecha
const numeroRepetido=(num)=>{
    let cont={};
    for (let i=0;i<num.length;i++){
        let numero=num[i];
        if(cont[numero]){
            cont[numero]++;
        }else{
            cont[numero]=1;
        }
    }
    let maxNum=num[0];
    let maxFrec=1;
    for(let numero in cont){
        if(cont[numero]>maxFrec){
            maxFrec=cont[numero];
            maxNum=Number(numero);
        }
    }
    return maxNum;
}
console.log(numeroRepetido([1,1,1,2,3,4,5,6,6,3,6,9,8]));
