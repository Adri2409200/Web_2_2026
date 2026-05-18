const API_URL = "http://localhost:3001/clientes";

const clientService = {
    listar_clientes: async () => {
        const res = await fetch(API_URL);
        return res.json();
    },

    detalleCliente: async (id) => {
        const res = await fetch(`${API_URL}/${id}`);
        return res.json();
    },

    crearCliente: async (nombre, email) => {
        const id = crypto.randomUUID();
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, nombre, email })
        });
        return res.json();
    },

    actualizarCliente: async (nombre, email, id) => {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, email })
        });
        return res.json();
    },

    eliminarCliente: async (id) => {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        return res.json();
    }
};

export { clientService };
