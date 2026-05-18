import { petService } from "../service/pets_service.js";

const formulario = document.querySelector('[data-form]');

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (!id) {
        window.location.href = "./error.html";
        return;
    }

    const nombre = document.querySelector("[data-nombre]");
    const raza = document.querySelector("[data-raza]");
    const edad = document.querySelector("[data-edad]");
    const peso = document.querySelector("[data-peso]");
    const dueñoId = document.querySelector("[data-dueño-id]");

    try {
        const mascota = await petService.detalleMascota(id);
        if (!mascota || mascota.error) {
            console.error("Mascota no encontrada:", mascota);
            window.location.href = "./error.html";
            return;
        }
        nombre.value = mascota.nombre;
        raza.value = mascota.raza;
        edad.value = mascota.edad;
        peso.value = mascota.peso;
        dueñoId.value = mascota.dueñold;  // nombre real de la columna en la BD
    } catch (error) {
        console.error("Error al cargar mascota:", error);
        window.location.href = "./error.html";
    }
};

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value.trim();
    const raza = document.querySelector("[data-raza]").value.trim();
    const edad = document.querySelector("[data-edad]").value;
    const peso = document.querySelector("[data-peso]").value;
    const dueñoId = document.querySelector("[data-dueño-id]").value.trim();

    if (!nombre || !raza || !edad || !peso || !dueñoId) {
        alert("Por favor, completa todos los campos");
        return;
    }

    if (edad <= 0) {
        alert("Edad inválida");
        return;
    }

    if (peso <= 0) {
        alert("Peso inválido");
        return;
    }

    try {
        await petService.actualizarMascota(nombre, raza, edad, peso, dueñoId, id);
        window.location.href = "./edicion_concluida_mascota.html";
    } catch (error) {
        console.error("Error:", error);
        alert("Error al actualizar");
    }
});

obtenerInformacion();