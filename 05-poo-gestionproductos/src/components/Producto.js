export class Producto {
    // Propiedades

    // Constructor
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    // Métodos
    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    getStock() {
        return this.stock;
    }

    actualizarStock(cantidad) {
        if (this.constructor.name === "ProductoDigital") {
            throw new Error("La clase ProductoDigital no puede acceder a este método.");
        }
        return this.stock + cantidad;
    }
}
