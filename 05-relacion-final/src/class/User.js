/**
 * @author Jaime Lozano Lozano
 * @description Clase User
 * @constructor name, age, email
 * @param {String} name
 * @param {Number} age
 * @param {String} email
 */
export class User {
    // propiedades
    // constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // métodos
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getEmail() {
        return this.email;
    }
}
