const API_URL = "http://localhost:3000/clientes";

const listar_clientes = () =>
    fetch(API_URL)
        .then(respuesta => respuesta.json())
        .catch(error => {
            console.error("Error al listar clientes:", error);
            return [];
        });

const crearCliente = (nombre, email) => {
    const id = crypto.randomUUID();
    return fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nombre, email })
    }).then(res => res.json());
};

const eliminarCliente = (id) => {
    return fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(res => res.json());
};

const detalleCliente = (id) =>
    fetch(`${API_URL}/${id}`).then(respuesta => respuesta.json());

const actualizarCliente = (nombre, email, id) => {
    return fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email })
    }).then(res => res.json());
};

export const clientService = {
    listar_clientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
};
