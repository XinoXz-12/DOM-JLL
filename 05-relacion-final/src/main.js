// IMPORTACIONES
import { table } from "./components/Table.js";

// DECLARACIONES
const users = [
    { name: "Diana Ross", age: 41, email: "diana@gmail.com" },
    { name: "Edward Norton", age: 30, email: "edward@gmail.com" },
    { name: "Bob Smith", age: 35, email: "bob@gmail.com" },
    { name: "Charlie Brown", age: 22, email: "charlie@gmail.com" },
    { name: "Alice Johnson", age: 28, email: "alice@gmail.com" },
];

// FUNCIONES
function handlerSortTable(event) {
    if (event.target.classList.contains("name")) {
        sortUsers("name");
    } else if (event.target.classList.contains("age")) {
        sortUsers("age");
    }
}

function sortUsers(column) {
    users.sort((a, b) => {
        if (column == "name") {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
        } else {
            return a.age - b.age;
        }
    });
    renderTable();
}

function renderTable() {
    const app = document.getElementById("app");
    app.innerHTML = "";
    app.appendChild(table(users));

    document
        .getElementById("usersTable")
        .addEventListener("click", handlerSortTable);
}

// APLICACIÓN
function initTable() {
    renderTable();
}

// EJECUCIÓN DE LA APLICACIÓN
initTable();

//! ----------------------------------------------------------------

// IMPORTACIONES
import { form } from "./components/Form.js";
import { TextFile } from "./class/TextFile.js";

// DECLARACIONES

// FUNCIONES
function handlerSubmitText(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();

    if (!name || !address) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const content = `Nombre: ${name} -- Dirección: ${address}`;
    const file = new TextFile('datos.txt', content);
    file.saveFile();
}

// APLICACIÓN
function initText() {
    const app = document.getElementById("app");
    app.appendChild(form());

    document.getElementById('textForm').
        addEventListener("submit", handlerSubmitText);
}

// EJECUCIÓN DE LA APLICACIÓN
initText();