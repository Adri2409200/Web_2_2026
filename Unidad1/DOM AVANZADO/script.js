import Form from "./componentes/formulario.js";
import tabla from "./componentes/tabla.js";
import cards from "./componentes/cards.js";

const API_URL = 'http://localhost:3000/tareas';

console.log('Script iniciado');

// Funciones de API integradas directamente
const apiFunctions = {
    cargarTareas: async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Error al obtener tareas');
            const tareas = await response.json();
            console.log('Tareas cargadas:', tareas);
            return tareas;
        } catch (error) {
            console.error('Error al cargar tareas:', error);
            return [];
        }
    },
    
    crearTarea: async (tarea) => {
        try {
            const nuevaTarea = {
                task: tarea.task,
                description: tarea.description,
                date: tarea.date,
                priority: tarea.priority,
                categoria: tarea.categoria || '',
                responsable: tarea.responsable || '',
                progreso: parseInt(tarea.progreso) || 0,
                completed: false,
                id: Date.now()
            };
            
            console.log('Guardando tarea en API:', nuevaTarea);
            
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevaTarea)
            });
            
            if (!response.ok) throw new Error('Error al crear tarea');
            const resultado = await response.json();
            console.log('Tarea guardada exitosamente:', resultado);
            return resultado;
        } catch (error) {
            console.error('Error al crear tarea:', error);
            return null;
        }
    },
    
    actualizarTarea: async (id, tareaActualizada) => {
        try {
            console.log('Actualizando tarea:', id, tareaActualizada);
            
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tareaActualizada)
            });
            
            if (!response.ok) throw new Error('Error al actualizar tarea');
            const resultado = await response.json();
            console.log('Tarea actualizada exitosamente:', resultado);
            return resultado;
        } catch (error) {
            console.error('Error al actualizar tarea:', error);
            return null;
        }
    },
    
    eliminarTarea: async (id) => {
        try {
            console.log('Eliminando tarea:', id);
            
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) throw new Error('Error al eliminar tarea');
            console.log('Tarea eliminada exitosamente');
            return true;
        } catch (error) {
            console.error('Error al eliminar tarea:', error);
            return false;
        }
    }
};

// Configurar tabla con las funciones de API
tabla.setApiFunctions(apiFunctions);

// Inicializar
(async () => {
    await tabla.cargarTareas();
    cards.update();
    
    Form.setDatos(async (task) => {
        console.log('Datos del formulario recibidos:', task);
        const nuevaTarea = await apiFunctions.crearTarea(task);
        if (nuevaTarea) {
            tabla.addTask(nuevaTarea);
            cards.update();
            console.log('Tarea añadida a la tabla y cards actualizadas');
        } else {
            console.error('No se pudo crear la tarea');
        }
    });
})();