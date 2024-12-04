// Gestión de usuarios desde una API -
const url = import.meta.env.VITE_URL;

//! Funciones construcctoras

export function Usuario(id, nombre, email, rol) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;

}

export function GestionUsuarios() {
    this.usuarios = [];
}

//? Métodos
Usuario.prototype.info = function () {
    console.log(`
        ID: ${this.id}
        Nombre: ${this.nombre}
        Email: ${this.email}
        Rol: ${this.rol}
    `);
};

GestionUsuarios.prototype.fetchUsuarios = async function () {
    try {
        // Ir a JSON placeholder y traerse los users
        const repsonse = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!repsonse.ok) {
            throw new Error("Error en la petición");
        }
        const data = await repsonse.json();
        
        // Construyo los objetos usuarios
        this.usuarios = data.map(user => {
            const { id, name, email } = user;
            return new Usuario(id, name, email, )
        });

        return this.usuarios;

    } catch (error) {
        console.error("Error en la petición", error);
    }
}

GestionUsuarios.prototype.guardarLocalStorage = function () {
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
}

GestionUsuarios.prototype.cargarLocalStorage = function () {
    if (localStorage.hasOwnProperty("usuarios")) {
        const usuarios = JSON.parse(localStorage.getItem("usuarios"));
        this.usuarios = usuarios.map(({ id, nombre, email, rol }) => new Usuario(id, nombre, email, rol));
    }
}

//! Clases

export class UsuarioClase {
    // Propiedades

    // Constructor
    constructor(id, nombre, email, rol) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
    }

    // Métodos
    info() {
        return `
        ID: ${this.id}
        Nombre: ${this.nombre}
        Email: ${this.email}
        Rol: ${this.rol}
    `;
    }
}

export class GestionUsuariosClase {
    // Propiedades
    // Constructor
    constructor() {
        this.usuarios = [];
    }

    // Métodos
    eliminarUsuario(index){
        this.usuarios.splice(index, 1);
    }

    buscarUser(nombre) {
        return this.usuarios.filter(user => {
            if (user.nombre === nombre) {
                return new UsuarioClase(user.id, user.nombre, user.email, user.rol);
            }
        });
    }

    async fetchUsuarios() {
        try {
            // Ir a JSON placeholder y traerse los users
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error en la petición");
            }
            const data = await response.json();

            // Construyo los objetos usuarios
            return this.usuarios = data.map(user => {
                const { id, name, email } = user;
                return new UsuarioClase(id, name, email, "user")
            });
        } catch (error) {
            console.error("Eror en la petición (clases):", error);
        }
    }

    guardarLocalStorage() {
        localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
    }
    
    cargarLocalStorage() {
        if (localStorage.hasOwnProperty("usuarios")) {
            const usersLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
            this.usuarios = usersLocalStorage.map(({ id, nombre, email, rol }) => new UsuarioClase(id, nombre, email, rol));
        }
    }
}