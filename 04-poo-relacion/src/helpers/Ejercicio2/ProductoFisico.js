import { Producto } from "./Producto";

export class ProductoFisico extends Producto {
    // Propiedades

    // Constructor
    constructor(nombre, precio, stock, {alto, ancho, profundo}) {
        super(nombre, precio, stock);
        this.dimensiones = {alto, ancho, profundo};
    }

    // Métodos
    getDimensiones() {
        return this.dimensiones;
    }
}