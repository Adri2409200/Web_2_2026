const paisDestino="Ecuador";
const paisesDisponible=["Bolivia","Ecuador","Brasil","Venezuela","italia","Francia"];
let edadPasajero=18;
let acompañado=true;


if((paisesDisponible.indexOf(paisDestino))>-1){
    console.log("El pais esta disponible")
    if(edadPasajero>=18){
            console.log("El pasaje esta disponible para su venta")
    }if(acompañado){
        console.log("El pasaje esta disponible para su venta.")
    }else{
    console.log("El pasaje no esta disponible")
}
}else{
    console.log("Pais no dispoble")
}
