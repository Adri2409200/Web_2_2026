const valorPasaje=1000;
if(valorPasaje===1000){
    console.log(`El pasaje es correcto`)
}
const paisDestino="Ecuador";
const paisesDisponible=["Bolivia","Ecuador","Brasil","Venezuela","italia","Francia"];

let edadPasajero=17;
let acompañado=true;
console.log(`Pasajes para ${paisDestino}`);
//Con logica positiva
if((paisesDisponible.indexOf(paisDestino)>-1&&(edadPasajero>=18)||acompañado)){
    console.log("El pasaje disponible para venta");
}else{
    console.log("No se puede vender el pasaje");
}
//Con logica negativa
if(!(paisesDisponible.indexOf(paisDestino)<-1&&!(edadPasajero<=18)||acompañado)){
    console.log("El pasaje disponible para venta");
}else{
    console.log("No se puede vender el pasaje");
}