const API_URL = "http://localhost:3000/perfil";

const listar_clientes = () => 
    fetch(API_URL).then(respuesta => respuesta.json());

const crearCliente = (nombre, email) => {
    const id = uuid.v4();
    return fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, id })
    });
};

const eliminarCliente = (id) => {
    return fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

const detalleCliente = (id) => {
    return fetch(`${API_URL}/${id}`).then(respuesta => respuesta.json());
};

const actualizarCliente = (nombre, email, id) => {
    return fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, id })
    });
};

export const clientService = {
    listar_clientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
};