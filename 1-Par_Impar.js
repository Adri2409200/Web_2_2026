//1.Dado un Array de números, devuelve un objeto con la cantidad de números pares e impares.
//Función Tradicional
function contParImpar(num){
    let total={
    par:0,
    impar:0
};
for(let i=0;i<num.length;i++){
    if(num[i]%2===0){
        total.par++;
    }else{
        total.impar++;
    }
}
    return total;
}
console.log(contParImpar([1,2,3,4,5,6,7,8,9]));
//Función Flecha
const contarParImpar=(num)=>{
    return{
        pares:num.filter(num=>num%2===0).length,
        impares:num.filter(num=>num%2!==0).length  
    };
};
console.log(contarParImpar([1,2,3,4,5,6,7,8,9]));

