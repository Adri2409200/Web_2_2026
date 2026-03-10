const paisDestino="Ecuador";
const paisesDisponible=["Bolivia","Ecuador","Brasil","Venezuela","italia","Francia"];
let pasaporte=true;
let casado=false;

if(paisesDisponible.indexOf(paisDestino)>-1&&edadPasajero>=18&&pasaporte&&!casado){
    console.log(`Disponible tour solteros`);
}else{
    console.log(`pais no disponible o pasajero no cumple requisitos`);
}