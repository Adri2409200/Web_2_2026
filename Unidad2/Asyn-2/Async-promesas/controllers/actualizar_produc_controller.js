import { productoService } from "../service/product_service.js";

const formulario = document.querySelector('[data-form]');

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (!id) {
        window.location.href = "./error.html";
        return;
    }

    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");

    try {
        const producto = await productoService.detalleProducto(id);
        nombre.value = producto.nombre;
        precio.value = producto.precio;
    } catch (error) {
        console.error("Error:", error);
        window.location.href = "./error.html";
    }
};

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value.trim();
    const precio = document.querySelector("[data-precio]").value;

    if (!nombre || !precio) {
        alert("Por favor, completa todos los campos");
        return;
    }

    if (isNaN(precio) || precio <= 0) {
        alert("Precio inválido");
        return;
    }

    try {
        await productoService.actualizarProducto(nombre, precio, id);
        window.location.href = "./edicion_concluida_producto.html";
    } catch (error) {
        console.error("Error:", error);
        alert("Error al actualizar");
    }
});

obtenerInformacion();
