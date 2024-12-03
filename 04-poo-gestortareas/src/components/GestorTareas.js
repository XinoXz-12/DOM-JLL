import { Tarea } from "./Tarea";

export class GestorTareas {
    // Propiedades

    // Constructor
    constructor() {
        this.tareas = [];
    }

    // Métodos
    añadirTarea(nombre) {
        this.tareas.push(new Tarea(nombre));
    }

    eliminarTarea(index) {
        this.tareas.splice(index, 1);
    }
}