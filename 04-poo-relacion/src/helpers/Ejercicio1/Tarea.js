export class Tarea {
    // propiedades
    static id = 0;
    nombre;
    completada;

    // constructor
    constructor(nombre) {
        this.id = ++Tarea.id;
        this.nombre = nombre;
        this.completada = false;
    }

    // métodos
    getId() {
        return this.id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    isCompletada() {
        if (this.completada) {
            return "Completada";
        } else {
            return "No completada";
        }
    }

    toggleButton() {
        if (this.completada) {
            return "No completar";
        } else {
            return "Completar";
        }
    }

    toggleCompletada() {
        this.completada = !this.completada;
    }

    obtenerTarea() {
        return `${this.nombre}: ${this.isCompletada()}`;
    }
}