const datos=[
    {
        'pais':'Bolivia',
        'precio':200
    },
    {
        'pais':'Ecuador',
        'precio':500
    },
    {
        'pais':'Brasil',
        'precio':900
    },
    {
        'pais':'Venezuela',
        'precio':100
    },
    {
        'pais':'Italia',
        'precio':200
    },
    {
        'pais':'Francia',
        'precio':300
    }
]
const presupuesto=300;
let i=0;

let paisSelecionado='';
do{
    if(datos[i].precio<=presupuesto){
        paisSelecionado=datos[i].pais;
    }
    i++;
}while(i<datos.length&&paisSelecionado=='')
    if(paisSelecionado==''){
        console.log(`No existen pasajes disponibles`);
    }else{
        console.log(`Puedes comprar pasaje`)
    }