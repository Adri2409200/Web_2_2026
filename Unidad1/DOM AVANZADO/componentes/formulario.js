const Form = (() => {
    const form = document.querySelector('[data-form]');
    const inputTask = document.querySelector('[data-input-task]');
    const inputDescription = document.querySelector('[data-input-descripcion]');
    const inputFecha = document.querySelector('[data-input-fecha]');
    const inputPrioridad = document.querySelector('[data-input-prioridad]');
    const inputCategoria = document.querySelector('[data-input-campo1]');
    const inputResponsable = document.querySelector('[data-input-campo2]');
    const inputProgreso = document.querySelector('[data-input-campo3]');
    
    const datosForm = () => {
        return {
            task: inputTask.value.trim(),
            description: inputDescription.value.trim(),
            date: inputFecha.value.trim(),
            priority: inputPrioridad.value.trim(),
            categoria: inputCategoria ? inputCategoria.value.trim() : '',
            responsable: inputResponsable ? inputResponsable.value.trim() : '',
            progreso: inputProgreso ? inputProgreso.value : 0
        };
    };
    
    const reset = () => {
        inputTask.value = "";
        inputDescription.value = "";
        inputFecha.value = "";
        inputPrioridad.value = "";
        if (inputCategoria) inputCategoria.value = "";
        if (inputResponsable) inputResponsable.value = "";
        if (inputProgreso) inputProgreso.value = "";
    };
    
    const setDatos = (callback) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const datos = datosForm();
            console.log('Datos del formulario:', datos);
            callback(datos);
            reset();
        });
    };
    
    return { setDatos };
})();

export default Form;