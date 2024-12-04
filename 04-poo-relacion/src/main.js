// Ejercicio 1
console.log("--------- Ejercicio 3 ---------");
import { GestorTareas } from "./helpers/Ejercicio1/GestorTareas";

const gestor = new GestorTareas();

// --------- Funciones de la aplicación  ---------
function pintarTareas() {
    const listaTareas = document.getElementById("lista-tareas");
    listaTareas.innerHTML = gestor.tareas.map(
        (tarea, index) => `
        <li>
        ${tarea.obtenerTarea()} 
        <button type="button" data-id="${index}" class="toggle">${tarea.toggleButton()}</button>
        <button type="button" data-id="${index}" class="eliminar">Eliminar</button>
        </li>
    `
    );
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

    document
        .getElementById("form-tareas")
        .addEventListener("submit", handlerAñadirTarea);

    document
        .getElementById("lista-tareas")
        .addEventListener("click", handlerListaTareas);

    pintarTareas();
}

// --------- Ejecución de la aplicación  ---------

// generarInterfaz();


// Ejercicio 3
import {
    Empleado,
    EmpleadoClases,
    EmpleadoFreelance,
} from "./helpers/Ejercicio3";

console.log("--------- Ejercicio 3 ---------");
const empleado1 = new Empleado("Juan", 25, "junior");
const empleado2 = new Empleado("Ana", 30, "semiSenior");
empleado1.info();
empleado2.info();

const freelance = new EmpleadoFreelance("Pedro", 35, 50);
const freelance2 = new EmpleadoFreelance("Maria", 40, 60);
freelance.info(44);
freelance2.info(44);

console.log("-------- Ejercicio 3 con clases --------");
const empleadoClases1 = new EmpleadoClases("Mario", 25, "junior");
const empleadoClases2 = new EmpleadoClases("Ana María", 30, "semiSenior");
empleadoClases1.info();
empleadoClases2.info();

const freelanceClases = new EmpleadoFreelance("Rodolfo", 35, 50);
const freelanceClases2 = new EmpleadoFreelance("María José", 40, 60);
freelanceClases.info(44);
freelanceClases2.info(44);


// Ejercicio 7
import { UsuarioClase, GestionUsuariosClase } from "./helpers/Ejercicio7";

console.log("--------- Ejercicio 7 ---------");


(async function () {
    // Declaración de variables
    const gestorUser = new GestionUsuariosClase();
    await gestorUser.fetchUsuarios();

    // Funciones
    function handlerClickEliminar(event) {
        if (event.target.classList.contains("btn-eliminar")) {
            const index = Number(event.target.dataset.id);
            gestorUser.eliminarUsuario(index);
        }
        pintarUsuarios();
    }
    
    function handlerSubmitBuscar(event) {
        event.preventDefault();
        const nombre = document.getElementById("buscar").value.trim();
        if (!nombre) {
            alert("Debes introducir un nombre");
        } else {
            const user = gestorUser.buscarUser(nombre);
            const divListaUsuarios = document.getElementById("lista-usuarios");
            divListaUsuarios.innerHTML = `
                <li data-id="${user.id-1}">
                    ${user.info()}
                    <img class="btn-eliminar" data-id="${index}" src="https://cdn-icons-png.flaticon.com/512/5092/5092406.png" width=20px>
            </li>`;
        }
    } 

    function pintarUsuarios() {
        const divListaUsuarios = document.getElementById("lista-usuarios");
        divListaUsuarios.innerHTML = gestorUser.usuarios.map((user, index)=>{
            return `<li data-id="${index}">
            ${user.info()}
            <img class="btn-eliminar" data-id="${index}" src="https://cdn-icons-png.flaticon.com/512/5092/5092406.png" width=20px>
            </li>`;
        }).join("");
    }

    // Aplicación
    // TODO: Renderizar en el DOM un formulario que permita, a través de un input y el boton de buscar, buscar por nombre los usuarios de gestorUsuariosClase. Además pintaremos en un div llamado lista-usuarios utilizando <li> la data de todos los usuario (quiero pintar el nombre, mail, rol y el botón de una papelera de reciclaje). Cada vez que yo pulse la papelera de reciclaje se borre el usuario
    
    const app = document.getElementById("app");
    
    const h1Element = document.createElement("h1");
    h1Element.textContent = "Gestión de Usuarios con JsonPlaceHolder";
        app.appendChild(h1Element);
    
        const divBuscarUsuarios = document.createElement("div");
        divBuscarUsuarios.id = "buscar-usuarios";
        app.appendChild(divBuscarUsuarios);
    
        divBuscarUsuarios.innerHTML = `
            <form id="form-usuario">
                <input id="buscar" type="text" placeholder="Nombre del usuario">
                <button type="submit" class="btn-buscar" id="buscar">Buscar</button>
            </form>
        `;

        const divListaUsuarios = document.createElement("div");
        divListaUsuarios.id = "lista-usuarios";
        app.appendChild(divListaUsuarios);

        pintarUsuarios();

        document.getElementById("lista-usuarios").
            addEventListener("click", handlerClickEliminar);

        document.querySelector("#form-usuario").
            addEventListener("submit", handlerSubmitBuscar);
})();
