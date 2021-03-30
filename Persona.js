"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorfavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorfavorito = colorfavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    get direcciones() {
        return this._direcciones;
    }
    set direcciones(value) {
        this._direcciones = value;
    }
    get mails() {
        return this._mails;
    }
    set mails(value) {
        this._mails = value;
    }
    get telefonos() {
        return this._telefonos;
    }
    set telefonos(value) {
        this._telefonos = value;
    }
    get notas() {
        return this._notas;
    }
    set notas(value) {
        this._notas = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get dni() {
        return this._dni;
    }
    set dni(dni) {
        this._dni = dni;
    }
    get colorFavorito() {
        return this._colorfavorito;
    }
    set colorFavorito(colorfavorito) {
        this._colorfavorito = colorfavorito;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    set cumpleaños(cumpleaños) {
        this._cumpleaños = cumpleaños;
    }
    mostrarDirecciones(value) {
        let direcciones = "";
        for (let i = 0; i < value.length; i++) {
            direcciones = direcciones + value[i].mostrarDatos(i);
        }
        return direcciones;
    }
    mostrarMails(value) {
        let mails = "";
        for (let i = 0; i < value.length; i++) {
            mails = mails + value[i].mostrarDatos(i);
        }
        return mails;
    }
    mostrarTelefonos(value) {
        let telefonos = "";
        for (let i = 0; i < value.length; i++) {
            telefonos = telefonos + value[i].mostrarDatos(i);
        }
        return telefonos;
    }
    mostrarDatos(i) {
        let fecha = this.cumpleaños.getDate() + "-" + this.cumpleaños.getUTCMonth() + "-" + this.cumpleaños.getFullYear();
        let datos = "Persona: " + (i + 1) + "\n" +
            "- Nombre: " + this.nombre + " " + this.apellidos + "\n" +
            "- Edad: " + this.edad + "años" + "\n" +
            "- Sexo: " + this.sexo + "\n" +
            this.mostrarDirecciones(this.direcciones) +
            this.mostrarMails(this.mails) +
            this.mostrarTelefonos(this.telefonos) +
            "- Compleaños: " + fecha + "\n" +
            "- DNI: " + this.dni + "\n" +
            "- Color Favorito: " + this.colorFavorito + "\n" +
            "- Notas: " + this.notas;
        return datos;
    }
    buscarDni(dni) {
        if (this.dni == dni)
            return true;
        else
            return false;
    }
}
exports.Persona = Persona;
