import { petService } from "../service/pets_service.js";

const formulario = document.querySelector('[data-form-pet]');

if (!formulario) {
    console.error("Formulario no encontrado");
    alert("Error: No se encontró el formulario");
}

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    
    const nombre = document.querySelector("[data-nombre]").value.trim();
    const raza = document.querySelector("[data-raza]").value.trim();
    const edad = document.querySelector("[data-edad]").value;
    const peso = document.querySelector("[data-peso]").value;
    const dueñoId = document.querySelector("[data-dueño-id]").value.trim();
    
    console.log("Datos a enviar:", { nombre, raza, edad, peso, dueñoId });
    
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
        const resultado = await petService.crearMascota(nombre, raza, edad, peso, dueñoId);
        console.log("Resultado:", resultado);
        
        if (resultado.error) {
            alert("Error: " + resultado.error);
        } else {
            window.location.href = "./registro_completado_mascota.html";
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al registrar mascota: " + error.message);
    }
});