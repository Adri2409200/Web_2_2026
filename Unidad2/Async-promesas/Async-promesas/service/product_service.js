const API_URL = "http://localhost:3001/productos";

const productoService = {
    listaProductos: async () => {
        const res = await fetch(API_URL);
        return res.json();
    },

    detalleProducto: async (id) => {
        const res = await fetch(`${API_URL}/${id}`);
        return res.json();
    },

    crearProducto: async (nombre, precio) => {
        const id = crypto.randomUUID();
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, nombre, precio: Number(precio) })
        });
        return res.json();
    },

    actualizarProducto: async (nombre, precio, id) => {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, precio: Number(precio) })
        });
        return res.json();
    },

    eliminarProducto: async (id) => {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        return res.json();
    }
};

export { productoService };
