// Base de datos del caos
let students = [];

// Elementos DOM
const inputNombre = document.getElementById('inputNombre');
const inputCurso = document.getElementById('inputCurso');
const inputEdad = document.getElementById('inputEdad');
const inputHermanos = document.getElementById('inputHermanos');
const inputCiudad = document.getElementById('inputCiudad');
const submitBtn = document.getElementById('submitBtn');
const fakeSubmitBtn = document.getElementById('fakeSubmitBtn');
const mysteryBtn = document.getElementById('mysteryBtn');
const showBtn = document.getElementById('showBtn');
const editLastBtn = document.getElementById('editLastBtn');
const deleteRandomBtn = document.getElementById('deleteRandomBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const recordsContainer = document.getElementById('recordsContainer');
const chaosToast = document.getElementById('chaosToast');

// Variables para el caos
let edadValue = 18;
let hermanosValue = 0;
let ciudadConstruida = '';
let dialValues = [0, 0, 0];

// Inicializar
function init() {
    setupAgeControls();
    setupDialSystem();
    setupLetterMaze();
    setupMovingElements();
    renderList();
    
    // Eventos principales
    submitBtn.addEventListener('click', () => {
        showToast('⚠️ ADVERTENCIA: Esta acción podría no hacer lo que esperas ⚠️', true);
        setTimeout(() => {
            if (confirm('¿REALMENTE quieres enviar? (Esta decisión te perseguirá)')) {
                insertStudent();
            }
        }, 500);
    });
    
    fakeSubmitBtn.addEventListener('click', () => {
        showToast('❌ Este botón es falso. Busca el verdadero. ❌', true);
        const allButtons = document.querySelectorAll('.chaos-button');
        allButtons.forEach(btn => {
            if (!btn.classList.contains('fake')) {
                btn.style.transform = 'scale(1.1)';
                setTimeout(() => btn.style.transform = '', 500);
            }
        });
    });
    
    mysteryBtn.addEventListener('click', () => {
        const randomAction = Math.random();
        if (randomAction < 0.33) {
            showToast('🔮 Has activado el modo caos... nada pasó 🔮');
        } else if (randomAction < 0.66) {
            clearForm();
            showToast('✨ Magia oscura: formulario reiniciado ✨');
        } else {
            const randomStudent = students[Math.floor(Math.random() * students.length)];
            if (randomStudent) {
                showToast(`🎭 Mensaje del universo: ${randomStudent.nombre} te observa 🎭`);
            }
        }
    });
    
    showBtn.addEventListener('click', () => {
        renderList();
        showToast(`📡 Mostrando ${students.length} almas perdidas 📡`);
    });
    
    editLastBtn.addEventListener('click', () => {
        if (students.length === 0) {
            showToast('No hay nada que editar en el vacío', true);
            return;
        }
        const lastIndex = students.length - 1;
        editStudent(lastIndex);
    });
    
    deleteRandomBtn.addEventListener('click', () => {
        if (students.length === 0) {
            showToast('El vacío no se puede eliminar', true);
            return;
        }
        const randomIndex = Math.floor(Math.random() * students.length);
        deleteStudentByIndex(randomIndex);
    });
    
    clearAllBtn.addEventListener('click', () => {
        if (confirm('⚠️ ELIMINARÁS TODO EL UNIVERSO DE DATOS ⚠️')) {
            students = [];
            renderList();
            showToast('🔥 TODOS LOS REGISTROS HAN SIDO ANIQUILADOS 🔥');
        }
    });
}

// Configurar controles de edad confusos
function setupAgeControls() {
    const ageUp = document.getElementById('ageUp');
    const ageDown = document.getElementById('ageDown');
    const ageRandom = document.getElementById('ageRandom');
    const ageReverse = document.getElementById('ageReverse');
    const ageConfusion = document.getElementById('ageConfusion');
    
    function updateAgeDisplay() {
        inputEdad.value = edadValue + ' años';
        const confusionMessages = [
            '[edad no es número]',
            '[edad es ilusión]',
            '[tiempo no existe]',
            '[eres joven? eres viejo?]',
            '[edad cuántica]'
        ];
        ageConfusion.textContent = confusionMessages[Math.floor(Math.random() * confusionMessages.length)];
    }
    
    ageUp.addEventListener('click', () => {
        edadValue = Math.min(edadValue + 1, 120);
        updateAgeDisplay();
    });
    
    ageDown.addEventListener('click', () => {
        edadValue = Math.max(edadValue - 1, 0);
        updateAgeDisplay();
    });
    
    ageRandom.addEventListener('click', () => {
        edadValue = Math.floor(Math.random() * 121);
        updateAgeDisplay();
        showToast(`Edad determinada por el caos: ${edadValue}`);
    });
    
    ageReverse.addEventListener('click', () => {
        edadValue = 120 - edadValue;
        updateAgeDisplay();
        showToast(`Edad invertida: ${edadValue}`);
    });
    
    updateAgeDisplay();
}

// Configurar sistema de diales
function setupDialSystem() {
    const dial1 = document.getElementById('dial1');
    const dial2 = document.getElementById('dial2');
    const dial3 = document.getElementById('dial3');
    const dials = [dial1, dial2, dial3];
    
    function updateSiblingsValue() {
        hermanosValue = dialValues.reduce((a, b) => a + b, 0);
        inputHermanos.value = hermanosValue;
        showToast(`Hermanos totales: ${hermanosValue} (${dialValues[0]}+${dialValues[1]}+${dialValues[2]})`);
    }
    
    dials.forEach((dial, index) => {
        dial.addEventListener('click', () => {
            dialValues[index] = (dialValues[index] + 1) % 10;
            dial.setAttribute('data-value', dialValues[index]);
            updateSiblingsValue();
        });
        
        dial.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            dialValues[index] = (dialValues[index] - 1 + 10) % 10;
            dial.setAttribute('data-value', dialValues[index]);
            updateSiblingsValue();
            return false;
        });
    });
}

// Configurar laberinto de letras
function setupLetterMaze() {
    const letterBtns = document.querySelectorAll('.letter-btn');
    const clearCityBtn = document.getElementById('clearCityBtn');
    
    letterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const letter = btn.getAttribute('data-letter');
            ciudadConstruida += letter;
            inputCiudad.value = ciudadConstruida;
            
            // Efecto visual
            btn.style.transform = 'scale(0.8)';
            setTimeout(() => btn.style.transform = '', 100);
            
            if (ciudadConstruida.length > 20) {
                showToast('Tu ciudad es demasiado larga. El cosmos la rechazará.', true);
            }
        });
        
        btn.addEventListener('mouseenter', () => {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const randomLetter = letters[Math.floor(Math.random() * letters.length)];
            btn.textContent = randomLetter;
            btn.setAttribute('data-letter', randomLetter);
        });
    });
    
    clearCityBtn.addEventListener('click', () => {
        ciudadConstruida = '';
        inputCiudad.value = '';
        showToast('Ciudad destruida. Reinicia desde el caos.');
    });
}

// Configurar elementos en movimiento
function setupMovingElements() {
    const movingHeader = document.getElementById('movingHeader');
    let x = 0, y = 0, dx = 1, dy = 1;
    
    setInterval(() => {
        x += dx;
        y += dy;
        if (Math.abs(x) > 10) dx *= -1;
        if (Math.abs(y) > 10) dy *= -1;
        movingHeader.style.transform = `translate(${x}px, ${y}px)`;
    }, 200);
    
    // Campo de nombre: requisitos que cambian
    const nameRule1 = document.getElementById('nameRule1');
    const nameRule2 = document.getElementById('nameRule2');
    const nameHintBtn = document.getElementById('nameHintBtn');
    const nameField = document.getElementById('nameField');
    
    setInterval(() => {
        const rules = [
            '[debe tener 3 vocales]',
            '[no puede tener letras repetidas]',
            '[debe comenzar con mayúscula]',
            '[mínimo 8 caracteres]',
            '[solo letras del zodíaco]',
            '[nombre debe ser un color]'
        ];
        nameRule1.textContent = rules[Math.floor(Math.random() * rules.length)];
    }, 2000);
    
    nameHintBtn.addEventListener('click', () => {
        nameRule2.style.display = nameRule2.style.display === 'none' ? 'block' : 'none';
        showToast('Requisito oculto revelado... ¿o no?');
    });
    
    inputNombre.addEventListener('input', () => {
        const value = inputNombre.value;
        if (value.length > 0 && value.length % 2 === 0) {
            nameField.style.animation = 'fieldShift 0.1s infinite alternate';
        } else {
            nameField.style.animation = 'fieldShift 0.5s infinite alternate';
        }
    });
}

// Insertar estudiante (POST)
function insertStudent() {
    let nombre = inputNombre.value.trim();
    let curso = inputCurso.value;
    let edad = edadValue;
    let hermanos = hermanosValue;
    let ciudad = ciudadConstruida;
    
    // Validaciones absurdas
    if (!nombre) {
        showToast('❌ El nombre no existe en esta dimensión ❌', true);
        return;
    }
    
    if (nombre.length < 3) {
        showToast('❌ El nombre es muy corto para existir ❌', true);
        return;
    }
    
    if (!curso) {
        showToast('❌ Debes seleccionar un curso, aunque no sepas cuál ❌', true);
        return;
    }
    
    if (edad < 0 || edad > 120) {
        showToast('❌ Tu edad desafía las leyes del tiempo ❌', true);
        return;
    }
    
    if (!ciudad) {
        showToast('❌ Construye una ciudad en el laberinto de letras ❌', true);
        return;
    }
    
    const newStudent = {
        nombre: nombre,
        curso: curso,
        edad: edad,
        hermanos: hermanos,
        ciudad: ciudad,
        id: Date.now()
    };
    
    students.push(newStudent);
    renderList();
    showToast(`✨ ${nombre} ha sido atrapado en el registro dimensional ✨`);
    
    // Limpiar solo algunos campos (caos)
    inputNombre.value = '';
    ciudadConstruida = '';
    inputCiudad.value = '';
    dialValues = [0, 0, 0];
    document.querySelectorAll('.dial').forEach((dial, i) => {
        dial.setAttribute('data-value', '0');
        dialValues[i] = 0;
    });
    hermanosValue = 0;
    inputHermanos.value = '0';
}

// Editar estudiante (PUT)
function editStudent(index) {
    if (index < 0 || index >= students.length) {
        showToast('Ese estudiante está en otra dimensión', true);
        return;
    }
    
    const student = students[index];
    
    // Edición con prompts confusos
    let newNombre = prompt(`Editar nombre de ${student.nombre} (escribe algo mágico)`, student.nombre);
    if (newNombre && newNombre.trim()) student.nombre = newNombre.trim();
    
    let newCurso = prompt(`Curso actual: ${student.curso}\nOpciones: Curso 1, Curso 2, Curso 3, Curso 4`, student.curso);
    if (newCurso && (newCurso === 'Curso 1' || newCurso === 'Curso 2' || newCurso === 'Curso 3' || newCurso === 'Curso 4')) {
        student.curso = newCurso;
    }
    
    let newEdad = prompt(`Edad actual: ${student.edad}`, student.edad);
    if (newEdad && !isNaN(parseInt(newEdad))) student.edad = parseInt(newEdad);
    
    let newHermanos = prompt(`Hermanos actuales: ${student.hermanos}`, student.hermanos);
    if (newHermanos && !isNaN(parseInt(newHermanos))) student.hermanos = parseInt(newHermanos);
    
    let newCiudad = prompt(`Ciudad actual: ${student.ciudad}`, student.ciudad);
    if (newCiudad && newCiudad.trim()) student.ciudad = newCiudad.trim();
    
    renderList();
    showToast(`🔄 Registro #${index + 1} ha sido manipulado dimensionalmente 🔄`);
}

// Eliminar estudiante (DELETE)
function deleteStudentByIndex(index) {
    if (index >= 0 && index < students.length) {
        const removed = students.splice(index, 1);
        renderList();
        showToast(`🗑️ ${removed[0].nombre} ha sido borrado de la existencia 🗑️`);
    }
}

// Renderizar lista
function renderList() {
    if (!recordsContainer) return;
    
    if (students.length === 0) {
        recordsContainer.innerHTML = '<div class="empty-chaos">[el vacío absoluto te observa]</div>';
        return;
    }
    
    let html = '';
    students.forEach((student, idx) => {
        html += `
            <div class="record-card">
                <div class="record-data">
                    <strong>#${idx + 1}</strong> | 👤 ${escapeHtml(student.nombre)}<br>
                    📚 ${escapeHtml(student.curso)} | ⌛ ${student.edad} años<br>
                    👨‍👩‍👧 ${student.hermanos} hermanos | 🏙️ ${escapeHtml(student.ciudad)}
                </div>
                <div class="record-actions">
                    <button class="record-edit" data-index="${idx}">✏️ EDITAR</button>
                    <button class="record-delete" data-index="${idx}">🗑️ ELIMINAR</button>
                </div>
            </div>
        `;
    });
    
    recordsContainer.innerHTML = html;
    
    // Agregar eventos
    document.querySelectorAll('.record-edit').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.getAttribute('data-index'));
            editStudent(idx);
        });
    });
    
    document.querySelectorAll('.record-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.getAttribute('data-index'));
            deleteStudentByIndex(idx);
        });
    });
}

// Limpiar formulario
function clearForm() {
    inputNombre.value = '';
    inputCurso.value = '';
    edadValue = 18;
    const ageDisplay = document.getElementById('inputEdad');
    if (ageDisplay) ageDisplay.value = '18 años';
    hermanosValue = 0;
    inputHermanos.value = '0';
    dialValues = [0, 0, 0];
    document.querySelectorAll('.dial').forEach((dial, i) => {
        dial.setAttribute('data-value', '0');
    });
    ciudadConstruida = '';
    inputCiudad.value = '';
}

// Mostrar toast
function showToast(message, isError = false) {
    chaosToast.textContent = message;
    chaosToast.style.left = '20px';
    chaosToast.style.background = isError ? '#330000' : '#000000';
    chaosToast.style.borderLeftColor = isError ? '#ff3366' : '#00ff99';
    
    setTimeout(() => {
        chaosToast.style.left = '-400px';
    }, 3000);
}

// Escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Iniciar todo
init();