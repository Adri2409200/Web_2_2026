import { productoService } from "../service/product_service.js";

const formulario = document.querySelector('[data-form-product]');

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    
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
        await productoService.crearProducto(nombre, precio);
        window.location.href = "./registro_completado_producto.html";
    } catch (error) {
        console.error("Error:", error);
        alert("Error al registrar producto");
    }
});
