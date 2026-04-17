const API_URL = "http://localhost:3000/productos";

const listaProductos = () => 
    fetch(API_URL).then(respuesta => respuesta.json());

const crearProducto = (nombre, precio) => {
    const id = uuid.v4();
    return fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nombre, precio })
    });
};

const eliminarProducto = (id) => {
    return fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

const detalleProducto = (id) => 
    fetch(`${API_URL}/${id}`).then(respuesta => respuesta.json());

const actualizarProducto = (nombre, precio, id) => {
    return fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nombre, precio })
    });
};

export const productoService = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
};