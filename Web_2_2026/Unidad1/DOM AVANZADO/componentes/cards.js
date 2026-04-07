import tabla from "./tabla.js";

const cards = (()=>{
    const taskCards = document.getElementById('taskCards');
    
    const update =()=>{
        const tasks = tabla.getTask();
        console.log('Actualizando cards con:', tasks);
        
        taskCards.innerHTML = '';

        tasks.forEach(task => {
            const card = document.createElement('div');
            card.className = 'taskCard';
            
            let colorProgreso = '#dc3545'; // Rojo 0-33%
            if (task.progreso > 33 && task.progreso <= 66) {
                colorProgreso = '#ffc107'; // Amarillo 34-66%
            } else if (task.progreso > 66) {
                colorProgreso = '#28a745'; // Verde 67-100%
            }
            
            if (task.completed) {
                colorProgreso = '#28a745';
            }
            
            card.innerHTML = ` 
                <p><strong>Nombre:</strong> ${task.task}</p>
                <p><strong>Descripción:</strong> ${task.description}</p>
                <p><strong>Fecha:</strong> ${task.date}</p>
                <p><strong>Prioridad:</strong> ${task.priority}</p>
                <p><strong>Categoría:</strong> ${task.categoria || '-'}</p>
                <p><strong>Responsable:</strong> ${task.responsable || '-'}</p>
                <p><strong>Progreso:</strong> ${task.progreso || 0}%</p>
                <div class="progress-bar" style="width:100%; background-color:#e0e0e0; height:10px; border-radius:5px; margin:5px 0;">
                    <div style="width:${task.progreso || 0}%; background-color:${colorProgreso}; height:10px; border-radius:5px;"></div>
                </div>
                <p><strong>Estado:</strong> ${task.completed ? 'Completada' : 'Pendiente'}</p>
            `;
            taskCards.appendChild(card)
        });
    };
    
    return {update}
})();

export default cards;