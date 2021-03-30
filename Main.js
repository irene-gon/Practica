"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('------------- CLASE MAIN------------------');
const Mail_1 = require("./Mail");
const Telefono_1 = require("./Telefono");
const Direccion_1 = require("./Direccion");
const Persona_1 = require("./Persona");
console.log('------------- Iniciamos ejecución del programa ------------------');
let direccion1 = [];
let personas = [];
let mail1 = [];
let telefono1 = [];
direccion1.push(new Direccion_1.Direccion("Calle Portugal", 27, 3, "B", 28000, "Madrid", "Madrid"));
mail1.push(new Mail_1.Mail("Casa", "mail@gmail.com"));
telefono1.push(new Telefono_1.Telefono("casa", "601101101"), new Telefono_1.Telefono("trabajo", "602202202"));
let p1 = new Persona_1.Persona("Juan", "Gonzalez", 36, "01234567A", new Date("1984-01-28"), "blanco", "hombre", direccion1, mail1, telefono1, "Comentarios Juan");
personas.push(p1);
console.log('------------- Persona 2 ------------------');
let direccion2 = [];
let mail2 = [];
let telefono2 = [];
direccion2.push(new Direccion_1.Direccion("Calle Verde", 190, 1, "B", 28022, "Madrid", "Madrid"), new Direccion_1.Direccion("Calle Abajo", 1, 4, "C", 3502, "benidorm", "Alicante"));
mail2.push(new Mail_1.Mail("Trabajo", "avion.es@gmail.com"));
telefono2.push(new Telefono_1.Telefono("casa", "603603603"));
let p2 = new Persona_1.Persona("Elena", "Suarez", 26, "05432122A", new Date("1995-11-28"), "rosa", "mujer", direccion2, mail2, telefono2, "Notas Elena");
personas.push(p2);
console.log('------------- Persona 3------------------');
let direccion3 = [];
let mail3 = [];
let telefono3 = [];
direccion3.push(new Direccion_1.Direccion("Calle Salamanca", 48, 6, "A", 28939, "Arroyomolinos", "Madrid"));
mail3.push(new Mail_1.Mail("Casa", "casa@gmail.com"), new Mail_1.Mail("Trabajo", "trabajo@gmail.com"));
telefono3.push(new Telefono_1.Telefono("casa", "604064604"), new Telefono_1.Telefono("trabajo", "656656656"));
let p3 = new Persona_1.Persona("Sandra", "Martinez", 45, "07707074A", new Date("1984-09-15"), "azul", "mujer", direccion3, mail3, telefono3, "Comnetarios Sandra");
personas.push(p3);
console.log('------------- Imprimir Personas------------------');
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}
console.log('------------- Imprimir personas con formateo de datos------------------');
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].mostrarDatos(i));
}
console.log('------------- buscar dni------------------');
let dni = "05432122A";
for (let i = 0; i < personas.length; i++) {
    if (personas[i].buscarDni(dni)) {
        console.log('------------- buscar dni antes------------------');
        console.log(personas[i].mostrarDatos(i));
        personas[i].direcciones = [];
        personas[i].mails = [];
        personas[i].telefonos = [];
        personas[i].direcciones.push(new Direccion_1.Direccion("Avenida Nueva", 21, 10, "A", 28027, "madrid", "Madrid"));
        personas[i].mails.push(new Mail_1.Mail("Casa", "nueva@gmail.com"));
        personas[i].telefonos.push(new Telefono_1.Telefono("casa", "66666666"));
        console.log('------------- buscar dni despues------------------');
        console.log(personas[i].mostrarDatos(i));
    }
}
console.log('------------- DATIS ACTUALIZADOS------------------');
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].mostrarDatos(i));
}
