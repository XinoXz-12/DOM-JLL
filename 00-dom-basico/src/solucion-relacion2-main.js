// ------------ Declaración de Variables ------------

// ------------ Declaración de Funciones ------------
const handlerClickSpan = (e) => {
    const span = e.target;
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Cambio el estilo inline de color
    span.style.backgroundColor = `#${randomColor}`;
};

const handlerDobleClickParrafo = (e) => {
    const parrafo = e.target;
    alert(parrafo.textContent);
};

const handlerKeyDown = (e) => {
    if (e.key === "Enter") {
        document
            .querySelectorAll("#contenedorSecundario p")
            .forEach((parrafo) => {
                parrafo.textContent =
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia laborum adipisci in dolore quae. Aperiam tempora non et omnis porro.";
            });
    }
};

const handlerClickEtiqueta = (e) => {
    const etiqueta = e.target;
    etiqueta.remove();
};

const handlerMouseColor = (e) => {
    const span = e.target;
    span.style.color = "blue";
};

const handlerMouseOutColor = (e) => {
    const span = e.target;
    span.style.color = "black";
};

const handlerClickImg = (e) => {
    document.querySelectorAll("#contenedorPrincipal p").forEach((parrafo) => {
        const currentSize = window.getComputedStyle(parrafo).fontSize;
        parrafo.style.fontSize = `${parseInt(currentSize) * 2}px`;
    });
};

const handlerCualquierTecla = (e) => {
    alert(e.code);
};

const handlerPrincipalColor = (e) => {
    const principalDiv = e.target;
    principalDiv.style.backgroundColor = "green";
}

// ------------ INICIO DE LA APLICACIÓN ------------
document.addEventListener("DOMContentLoaded", function () {
    // 1.- Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`. Cuando se haga clic, cambia el color de fondo del elemento al azar.
    const clicSpansSecundario = document
        .querySelectorAll("#contenedorSecundario span")
        .forEach((span) => {
            // Tengo que asignar un evento al clic de ese span.
            span.addEventListener("click", handlerClickSpan);
        });

    // 2.- Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.
    document.querySelectorAll(".parrafo").forEach((parrafo) => {
        parrafo.addEventListener("dblclick", handlerDobleClickParrafo);
    });

    // 3.- Añade un evento de cambio a un `<select>` que está fuera del `contenedorPrincipal`. Cuando se cambie el valor, actualiza el texto del elemento `h1` al nuevo valor seleccionado.

    // 4.- Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").
    document.addEventListener("keydown", handlerKeyDown);

    // 5.- Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.
    document.querySelectorAll(".etiqueta").forEach((etiqueta) => {
        etiqueta.addEventListener("click", handlerClickEtiqueta);
    });

    // 6.- Crea una función que cambie el color de todos los elementos `<span>` dentro del `contenedorSecundario` cuando se mueva el mouse sobre ellos. El nuevo color debe ser azul.
    document.querySelectorAll("#contenedorSecundario span").forEach((span) => {
        span.addEventListener("mouseover", handlerMouseColor);
        span.addEventListener("mouseout", handlerMouseOutColor);
    });

    // 7.- Añade un evento de carga a la página. Cuando la página se cargue, muestra una alerta con el texto "Página cargada".

    // 8.- Crea una función que cambie el tamaño del texto de todos los párrafos dentro del `contenedorPrincipal` cuando se haga clic en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.
    document.querySelector("img").addEventListener("click", handlerClickImg);

    // 9.- Añade un evento de teclado a la página. Cuando se presione cualquier tecla, muestra una alerta con el código de la tecla presionada.
    document.addEventListener("keydown", handlerCualquierTecla);

    // 10.- Crea una función que cambie el color de fondo del `contenedorPrincipal` cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.
    document.getElementById("contenedorPrincipal").addEventListener("click", handlerPrincipalColor);
});
