import cards from "./cards.js";

const tabla = (() => {
    const cuerpoTabla = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    let apiFunctions = null;
    
    const setApiFunctions = (functions) => {
        apiFunctions = functions;
    };
    
    const cargarTareas = async () => {
        if (!apiFunctions) return;
        const tareas = await apiFunctions.cargarTareas();
        cuerpoTabla.innerHTML = '';
        tareas.forEach(tarea => {
            agregarFilaTabla(tarea);
        });
        cards.update();
    };
    
    const agregarFilaTabla = (task) => {
        const nuevaFila = cuerpoTabla.insertRow();
        nuevaFila.dataset.id = task.id;
        
        if (task.completed) {
            nuevaFila.classList.add('completed');
        }
        
        nuevaFila.insertCell(0).textContent = task.task;
        nuevaFila.insertCell(1).textContent = task.description;
        nuevaFila.insertCell(2).textContent = task.date;
        nuevaFila.insertCell(3).textContent = task.priority;
        nuevaFila.insertCell(4).textContent = task.categoria || '-';
        nuevaFila.insertCell(5).textContent = task.responsable || '-';
        nuevaFila.insertCell(6).textContent = task.progreso ? task.progreso + '%' : '0%';
        
        const accionCell = nuevaFila.insertCell(7);
        const acciones = document.createElement('div');
        acciones.className = 'actions';
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Hecho';
        completeButton.className = 'view';
        completeButton.addEventListener('click', async () => {
            nuevaFila.classList.toggle('completed');
            const tareaActualizada = obtenerTareaDesdeFila(nuevaFila);
            tareaActualizada.id = parseInt(nuevaFila.dataset.id);
            tareaActualizada.completed = nuevaFila.classList.contains('completed');
            if (apiFunctions) {
                await apiFunctions.actualizarTarea(tareaActualizada.id, tareaActualizada);
            }
            cards.update();
        });
        acciones.appendChild(completeButton);
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'edit';
        editButton.addEventListener('click', async (e) => {
            e.preventDefault();
            const tareaActual = obtenerTareaDesdeFila(nuevaFila);
            tareaActual.id = parseInt(nuevaFila.dataset.id);
            
            const nuevoTask = prompt('Editar nombre de la tarea:', tareaActual.task);
            if (nuevoTask !== null) nuevaFila.cells[0].textContent = nuevoTask;
            
            const nuevaDesc = prompt('Editar descripción:', tareaActual.description);
            if (nuevaDesc !== null) nuevaFila.cells[1].textContent = nuevaDesc;
            
            const nuevaFecha = prompt('Editar fecha (YYYY-MM-DD):', tareaActual.date);
            if (nuevaFecha !== null) nuevaFila.cells[2].textContent = nuevaFecha;
            
            const nuevaPrioridad = prompt('Editar prioridad:', tareaActual.priority);
            if (nuevaPrioridad !== null) nuevaFila.cells[3].textContent = nuevaPrioridad;
            
            const nuevaCategoria = prompt('Editar categoría:', tareaActual.categoria);
            if (nuevaCategoria !== null) nuevaFila.cells[4].textContent = nuevaCategoria || '-';
            
            const nuevoResponsable = prompt('Editar responsable:', tareaActual.responsable);
            if (nuevoResponsable !== null) nuevaFila.cells[5].textContent = nuevoResponsable || '-';
            
            const nuevoProgreso = prompt('Editar progreso (0-100):', tareaActual.progreso);
            if (nuevoProgreso !== null && !isNaN(nuevoProgreso) && nuevoProgreso >= 0 && nuevoProgreso <= 100) {
                nuevaFila.cells[6].textContent = nuevoProgreso + '%';
            } else if (nuevoProgreso !== null) {
                alert('Por favor ingresa un número entre 0 y 100');
            }
            
            const tareaActualizada = obtenerTareaDesdeFila(nuevaFila);
            tareaActualizada.id = tareaActual.id;
            tareaActualizada.completed = nuevaFila.classList.contains('completed');
            if (apiFunctions) {
                await apiFunctions.actualizarTarea(tareaActualizada.id, tareaActualizada);
            }
            cards.update();
        });
        acciones.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', async () => {
            if (confirm('¿Estás seguro de eliminar esta tarea?')) {
                const id = parseInt(nuevaFila.dataset.id);
                if (apiFunctions) {
                    await apiFunctions.eliminarTarea(id);
                }
                cuerpoTabla.deleteRow(nuevaFila.rowIndex - 1);
                cards.update();
            }
        });
        acciones.appendChild(deleteButton);
        
        accionCell.appendChild(acciones);
        console.log('Fila añadida correctamente');
    };
    
    const addTask = (task) => {
        agregarFilaTabla(task);
    };
    
    const obtenerTareaDesdeFila = (fila) => {
        return {
            task: fila.cells[0].textContent,
            description: fila.cells[1].textContent,
            date: fila.cells[2].textContent,
            priority: fila.cells[3].textContent,
            categoria: fila.cells[4].textContent === '-' ? '' : fila.cells[4].textContent,
            responsable: fila.cells[5].textContent === '-' ? '' : fila.cells[5].textContent,
            progreso: parseInt(fila.cells[6].textContent) || 0,
            completed: fila.classList.contains('completed')
        };
    };
    
    const getTask = () => {
        return Array.from(cuerpoTabla.rows).map(row => {
            const task = obtenerTareaDesdeFila(row);
            task.id = parseInt(row.dataset.id);
            return task;
        });
    };
    
    return { addTask, getTask, cargarTareas, setApiFunctions };
})();

export default tabla;