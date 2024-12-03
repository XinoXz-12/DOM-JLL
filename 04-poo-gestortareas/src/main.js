// --------- Importaciones ---------
import { GestorTareas } from "/src/components/GestorTareas.js";

// --------- Variables globales  ---------
const gestor = new GestorTareas();

// --------- Funciones de la aplicación  ---------
function pintarTareas() {
    const listaTareas = document.getElementById("lista-tareas");
    listaTareas.innerHTML = gestor.tareas.map((tarea, index)=>`
        <li>
        ${tarea.obtenerTarea()} 
        <button type="button" data-id="${index}" class="toggle">${tarea.toggleButton()}</button>
        <button type="button" data-id="${index}" class="eliminar">Eliminar</button>
        </li>
    `);
}

function handlerAñadirTarea(event) {
    event.preventDefault();

    const nombreTarea = document.getElementById("nombre-tarea").value.trim();
    if (!nombreTarea) {
        alert("Debes introducir una tarea");
    } else {
        gestor.añadirTarea(nombreTarea);
        pintarTareas();	
    }

    event.target.reset();
}

function handlerListaTareas(event) {
    const tarea = gestor.tareas[Number(event.target.dataset.id)];
    if (event.target.classList.contains("toggle")) {
        tarea.toggleCompletada();
    } else if (event.target.classList.contains("eliminar")) {
        gestor.eliminarTarea(Number(event.target.dataset.id));
    }
    pintarTareas();
}

function generarInterfaz() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <h1>Gestión de Tareas</h1>
        <form id="form-tareas">
            <input type="text" id="nombre-tarea" placeholder="Tarea">
            <button type="submit">Añadir Tarea</button>
        </form>

        <h2>Tareas</h2>
        <ul id="lista-tareas"></ul>
    `;

    document.getElementById("form-tareas").
        addEventListener("submit", handlerAñadirTarea);

    document.getElementById("lista-tareas").
        addEventListener("click", handlerListaTareas);
    
    pintarTareas();
}

// --------- Ejecución de la aplicación  ---------

generarInterfaz();