const paisDestino="Ecuador";
const paisesDisponible=["Bolivia","Ecuador","Brasil","Venezuela","italia","Francia"];
let valroPasaje=0;
/*
if (paisDestino=="Bolivia"){
    valorPasaje=100;
}else if    (paisDestino=="Ecuador"){
    valorPasaje=200;
}*/
switch(paisDestino){
    case "Bolivia":
        valroPasaje=500;
        break;
    case "Ecuador":
        valroPasaje=100;
        break;
    case "Barsil":
        valroPasaje=300;
        break;
    default:
        console.log("No existen pasajes para esas ciudades");
}
if (valorPasaje>0){
    console.log(`El valor del pasaje es ${valroPasaje}`)
}
