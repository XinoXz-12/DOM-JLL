import { Carrito } from "./components/Carrito.js";

const carrito = new Carrito();
// cargamos los datos del localStorage al carrito.
carrito.cargarLocalStorage();

// Funciones
function pintarCarrito() {
    const lista = document.getElementById("lista-products");
    lista.innerHTML = carrito.productos
        .map(
            (producto, index) => `
    <li data-id="${index}">${producto.obtenerInfo()}
    <button class="btn-editar" data-id="${index}">Editar</button>
    <button class="btn-borrar" data-id="${index}">Borrar</button>
    </li>
  `
        )
        .join("");
    // Calcular el Total
}

const handlerSubmitForm = (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre-product").value.trim();
    const cantidad = Number(document.querySelector("#cantidad-product").value);
    const precio = Number(document.querySelector("#precio-product").value);

    // validaciones del folmulario básicas
    if (!nombre || cantidad < 0 || precio < 0) {
        alert("Debes insertar valores correctos");
    } else {
        // Añadimos el nombre, cantidad y precio a un producto del carrito
        carrito.addProduct(nombre, cantidad, precio);
        // Ahora pintamos el carrito
        pintarCarrito();
    }
    // Limpiar los campos del formulario
    event.target.reset();
};

const opcionesProducto = (event) => {
    // target es el componente donde he hecho CLICK o lo que sea
    const index = Number(event.target.dataset.id);
    if (event.target.classList.contains("btn-borrar")) {
        carrito.borrarProducto(index);
        pintarCarrito();
    }

    if (event.target.classList.contains("btn-editar")) {
        const newCantidad = prompt(
            "Introduzca la nueva cantidad",
            carrito.productos[index].cantidad
        );
        if (newCantidad || Number(newCantidad > 0)) {
            carrito.editarProducto(index, Number(newCantidad));
            pintarCarrito();
        }
    }
};

// Seleccionar APP
function pintarInterfazWeb() {
    const app = document.getElementById("app");

    app.innerHTML = `
      <h1>Carrito de la compra</h1>
      <form id="form-product">
        <input type="text" id="nombre-product" placeholder="Nombre del producto">
        <input type="number" id="cantidad-product" placeholder="Cantidad">
        <input type="number" id="precio-product" placeholder="Precio">
        <button type="submit">Añadir producto</button>
      </form>

      <h2>Productos</h2>
      <div id="lista-products"></div>
    `;

    document
        .getElementById("form-product")
        .addEventListener("submit", handlerSubmitForm);

    document
        .getElementById("lista-products")
        .addEventListener("click", opcionesProducto);

    // Pintar lo que tenemos en el local storage
    pintarCarrito();
}

// ---------- INICIO DE LA APLICACIÓN ------------
pintarInterfazWeb();
