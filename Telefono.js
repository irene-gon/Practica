"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    mostrarDatos(i) {
        let datos = "- Telefono " + (i + 1) + " :" +
            " Tipo: " + this.tipo +
            ", Numero: " + this.numero + "\n";
        return datos;
    }
}
exports.Telefono = Telefono;
