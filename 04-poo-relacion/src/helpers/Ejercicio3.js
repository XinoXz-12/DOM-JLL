//? Funciones constructoras
export function Empleado(nombre, edad, puesto) {
    // Propiedades
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;

    // Contructor
}

// Método compartido
Empleado.prototype.calcularSalario = function () {
    const salarioBase = {
        junior: 1500,
        semiSenior: 2000,
        senior: 3000,
    };

    return salarioBase[this.puesto] || 0;
};

// Mostrar info del empleado
Empleado.prototype.info = function () {
    console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Puesto: ${this.puesto}
        Salario: ${this.calcularSalario()}
        `);
};

//? Clase hija de empleado
/**
 * @description Clase EmpleadoFreelance
 * @param {String} nombre
 * @param {Number} edad
 * @param {Number} precioHora
 */
export function EmpleadoFreelance(nombre, edad, precioHora) {
    Empleado.call(this, nombre, edad, "freelance");
    this.precioHora = precioHora;

    // Método prototípico de la clase padre
    EmpleadoFreelance.prototype = Object.create(Empleado.prototype);
    EmpleadoFreelance.prototype.constructor = EmpleadoFreelance;
}
EmpleadoFreelance.prototype.calcularSalario = function (horasTrabajadas) {
    return horasTrabajadas * this.precioHora;
};

// Mostrar info del empleado
EmpleadoFreelance.prototype.info = function (horasTrabajadas) {
    console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Puesto: ${this.puesto}
        Precio Hora: ${this.precioHora}
        Salario: ${this.calcularSalario(horasTrabajadas)}
        `);
};

//! -------------------------------- Clase EmpleadoClases --------------------------------

export class EmpleadoClases {
    // Propiedades

    // constructor
    constructor(nombre, edad, puesto) {
        this.nombre = nombre;
        this.edad = edad;
        this.puesto = puesto;
    }

    // Métodos
    calcularSalario() {
        const salarioBase = {
            "junior": 1500,
            "semiSenior": 2000,
            "senior": 3000,
        }
        return salarioBase[this.puesto] || 0;
    }

    info() {
        console.log(`
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            Puesto: ${this.puesto}
            Salario: ${this.calcularSalario()}
            `);
    }
}

//? Clase hija de empleadoClases
export class EmpleadoFreelanceClases extends EmpleadoClases {
    constructor (nombre, edad, precioHora) {
        super(nombre, edad, "freelance");
        this.precioHora = precioHora;
    }

    calcularSalario(horasTrabajadas) {
        return horasTrabajadas * this.precioHora;
    }
    
    info(horasTrabajadas) {
        console.log(`
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            Puesto: ${this.puesto}
            Precio Hora: ${this.precioHora}
            Salario: ${this.calcularSalario(horasTrabajadas)}
            `);
    }
}