import { Producto } from "./Producto";

export class Carrito {
    // Propiedades -- privadas/públicas

    // constructor
    constructor() {
        // Crear un array de productos
        this.productos = [];
    }

    // métodos
    addProduct(nombre, cantidad, precio) {
        this.productos.push(new Producto(nombre, cantidad, precio));
        // lo guardamos también en el localStorage
        this.guardarLocalStorage();
    }

    /**
     *
     * @param {Number} index
     * @return <void>
     */
    borrarProducto(index) {
        this.productos.splice(index, 1);
        // lo guardamos también en el localStorage
        this.guardarLocalStorage();
    }

    editarProducto(index, newCantidad) {
        if (newCantidad > 0) {
            this.productos[index].cantidad = newCantidad;
            // actualizar el localStorage
            this.guardarLocalStorage();
        }
    }

    calcularTotalCarrito() {
        return this.productos.reduce(
            (total, producto) => total + producto.calcularTotal(),
            0
        );
    }

    guardarLocalStorage() {
        // setItem("clave", valor) // --> guardar con stringify
        localStorage.setItem("carrito", JSON.stringify(this.productos));
    }

    cargarLocalStorage() {
        // getItem("clave") // --> sacar con parse
        if (localStorage.hasOwnProperty("carrito")) {
            this.productos = JSON.parse(localStorage.getItem("carrito")).map(({ nombre, cantidad, precio }) => new Producto(nombre, cantidad, precio));
        }
    }
}
