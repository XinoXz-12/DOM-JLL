export class Producto {
    // Propiedades -- privadas/públicas
    #precio;

    // constructor
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.#precio = precio;
    }

    // métodos
    getPrecio() {
        return this.#precio;
    }

    setPrecio(newPrice) {
        this.#precio = newPrice;
    }

    calcularTotal() {
        return this.#precio * this.cantidad;
    }

    obtenerInfo() {
        return `Nombre: ${this.nombre} --- Cantidad: ${
            this.cantidad
        } --- Precio: ${this.#precio} --- Total: ${this.calcularTotal()}`;
    }
}
