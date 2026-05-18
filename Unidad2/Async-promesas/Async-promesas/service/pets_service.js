const API_URL_MASCOTAS = "http://localhost:3001/mascotas";
const API_URL_CLIENTES = "http://localhost:3001/clientes";

const petService = {
    listaMascotas: async () => {
        try {
            const res = await fetch(API_URL_MASCOTAS);
            return res.json();
        } catch (error) {
            console.error("Error al listar mascotas:", error);
            return [];
        }
    },

    detalleMascota: async (id) => {
        const res = await fetch(`${API_URL_MASCOTAS}/${id}`);
        return res.json();
    },

    crearMascota: async (nombre, raza, edad, peso, dueñoId) => {
        const id = crypto.randomUUID();
        const res = await fetch(API_URL_MASCOTAS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, nombre, raza, edad: Number(edad), peso: Number(peso), dueñoId })
        });
        return res.json();
    },

    actualizarMascota: async (nombre, raza, edad, peso, dueñoId, id) => {
        const res = await fetch(`${API_URL_MASCOTAS}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, raza, edad: Number(edad), peso: Number(peso), dueñoId })
        });
        return res.json();
    },

    eliminarMascota: async (id) => {
        const res = await fetch(`${API_URL_MASCOTAS}/${id}`, { method: "DELETE" });
        return res.json();
    },

    obtenerDueño: async (idDueño) => {
        const res = await fetch(`${API_URL_CLIENTES}/${idDueño}`);
        return res.json();
    }
};

export { petService };
