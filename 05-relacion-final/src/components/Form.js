/**
 * @author Jaime Lozano Lozano
 * @description Componente Form
 * @returns Form
 */
export function form() {
    const formDiv = document.createElement("div");
    formDiv.innerHTML = `
        <h2>Generador de Archivo de Texto</h2>
            <p><em>Ingrese sus datos para generar un archivo de texto</em></p>
            <form id="textForm">
                <input id="name" placeholder="Nombre">
                <input id="address" placeholder="Ingrese su dirección">
                <button type="submit" id="submit">Descargar</button>
            </form>`;

    return formDiv;
}
