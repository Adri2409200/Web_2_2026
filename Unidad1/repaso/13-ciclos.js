const paisesDisponible=["Bolivia","Ecuador","Brasil","Venezuela","italia","Francia"];
const precioPaises=new Array(100,200,300,400,500,600);
const presupuesto=250;

let i=0;

while(precioPaises[i]>presupuesto && i<paisesDisponible.length){
    i++;
}
if(i==paisesDisponible.length){
    console.log(`No existe pasaje`);
}else{
    console.log(`Puedes comprar el pasaje`);
}