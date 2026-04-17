//2.Dada una frase, encuentra la palabra más larga.
//Funcion Tradicional
function fraseMasLarga(frase){
    let nPalabras=frase.split(" ");
    let masLarga=nPalabras[0];
    for(let i=1;i<nPalabras.length;i++){
        if(nPalabras[i].length>masLarga.length){
            masLarga=nPalabras[i];
        }
    }
    return masLarga;
}
console.log(fraseMasLarga("Hola un placer conocerlos a todos los presentes"));
//Funcion Flecha
const palabraMasLarga=(palabra)=>{
   return palabra.split(" ").reduce((masLarga,actual)=>{
        return masLarga.length>actual.length?masLarga:actual;
    });
}
console.log(palabraMasLarga("Hola un placer conocerlos a todos los presentes"));
