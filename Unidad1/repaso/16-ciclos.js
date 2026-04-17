const saludar=()=>{
    console.log("funcion flecha");
};
saludar();

const duplicar=numero=>{
    return numero*2;
};
console.log(duplicar(5));

const suma=(a,b)=>{
    return a+b;
}
console.log(suma(2,3));

const crearUsuario=(nombre,edad)=>({nombre:nombre,edad:edad});
console.log(crearUsuario("Juan",28));

const numero1=[3,2,4,5,6,200];
//funcion para filtar
const procesarNumeros=(numeros)=>{
    return numeros
        .filter(numero=>numero>10)
        .map(numero=>numero*2);
};

const resultado=procesarNumeros(numero1);
console.log(resultado);

const usuarios=[
    {nombre:"Juan",edad:17},
    {nombre:"Jose Luis",edad:13},
    {nombre:"Maria",edad:25},
    {nombre:"Santi",edad:90},
    {nombre:"Felipe",edad:43}
];
