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

const buscarPasaje = (datos, presupuesto) => {
    let i = 0;
    let paisSelecionado = '';
    do {
    if (datos[i].precio <= presupuesto) {
        paisSelecionado = datos[i].pais;
    }
    i++;
} while (i < datos.length && paisSelecionado == '');

if (paisSelecionado == '') {
    return `No existen pasajes disponibles`;
} else {
    return `Puedes comprar pasaje a ${paisSelecionado}`;
}
};

console.log(buscarPasaje(datos, 300));