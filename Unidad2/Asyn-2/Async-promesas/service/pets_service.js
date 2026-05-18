const API_URL_MASCOTAS = "http://localhost:3000/mascotas";
const API_URL_CLIENTES = "http://localhost:3000/clientes";

const listaMascotas = () =>
    fetch(API_URL_MASCOTAS)
        .then(respuesta => respuesta.json())
        .catch(error => {
            console.error("Error al listar mascotas:", error);
            return [];
        });

const crearMascota = (nombre, raza, edad, peso, dueñoId) => {
    const id = crypto.randomUUID();
    return fetch(API_URL_MASCOTAS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, nombre, raza, edad, peso, dueñoId })
    }).then(res => res.json());
};

const eliminarMascota = (id) => {
    return fetch(`${API_URL_MASCOTAS}/${id}`, { method: "DELETE" })
        .then(res => res.json());
};

const detalleMascota = (id) =>
    fetch(`${API_URL_MASCOTAS}/${id}`).then(respuesta => respuesta.json());

const actualizarMascota = (nombre, raza, edad, peso, dueñoId, id) => {
    return fetch(`${API_URL_MASCOTAS}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, raza, edad, peso, dueñoId })
    }).then(res => res.json());
};

const obtenerDueño = (idDueño) =>
    fetch(`${API_URL_CLIENTES}/${idDueño}`).then(respuesta => respuesta.json());

export const petService = {
    listaMascotas,
    crearMascota,
    eliminarMascota,
    detalleMascota,
    actualizarMascota,
    obtenerDueño
};
