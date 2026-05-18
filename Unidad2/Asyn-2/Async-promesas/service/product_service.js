const API_URL = "http://localhost:3000/productos";

const listaProductos = () =>
    fetch(API_URL)
        .then(respuesta => respuesta.json())
        .catch(error => {
            console.error("Error al listar productos:", error);
            return [];
        });

const crearProducto = (nombre, precio) => {
    const id = crypto.randomUUID();
    return fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nombre, precio })
    }).then(res => res.json());
};

const eliminarProducto = (id) => {
    return fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(res => res.json());
};

const detalleProducto = (id) =>
    fetch(`${API_URL}/${id}`).then(respuesta => respuesta.json());

const actualizarProducto = (nombre, precio, id) => {
    return fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, precio })
    }).then(res => res.json());
};

export const productoService = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
};
