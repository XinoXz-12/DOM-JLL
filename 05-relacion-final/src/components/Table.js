import { User } from "../class/User";

/**
 * @author Jaime Lozano Lozano
 * @description Componente Table
 * @param {Array} users 
 * @returns Table
 */
export function table(users) {
    const arrayUsers = users.map(({ name, age, email }) => new User(name, age, email));

    const tableDiv = document.createElement("div");
    tableDiv.id = "tableDiv";
    tableDiv.innerHTML = `
        <h2>Lista de Usuarios</h2>
        <table id="usersTable">
            <thead>
                <tr>
                    <th class="name">Nombre</th>
                    <th class="age">Edad</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                ${arrayUsers
                    .map(
                        (user, index) => `
                <tr data-id="${index}">
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                </tr>
                `
                    )
                    .join("")}
            </tbody>
            </table>
        `;

    return tableDiv;
}