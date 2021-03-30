

console.log('------------- CLASE MAIN------------------');

import {Mail} from './Mail';
import {Telefono} from './Telefono';
import {Direccion} from './Direccion';
import {Persona} from './Persona';

console.log ('------------- Iniciamos ejecución del programa ------------------');
let direccion1 :Array <Direccion> =[];
let personas: Array<Persona>=[];
let mail1 :Array <Mail> =[];
let telefono1 :Array <Telefono> =[];
direccion1.push(new Direccion("Calle Portugal",27,3,"B",28000,"Madrid","Madrid"));
mail1.push(new Mail("Casa","mail@gmail.com"));
telefono1.push(new Telefono("casa","601101101"),new Telefono("trabajo", "602202202"));
let p1=new Persona("Juan","Gonzalez",36,"01234567A",new Date("1984-01-28"),"blanco","hombre",direccion1,mail1,telefono1,"Comentarios Juan");
personas.push(p1);


console.log ('------------- Persona 2 ------------------');
let direccion2 :Array <Direccion> =[];
let mail2 :Array <Mail> =[];
let telefono2:Array <Telefono> =[];
direccion2.push(new Direccion("Calle Verde",190,1,"B",28022,"Madrid","Madrid"),new Direccion("Calle Abajo",1,4,"C",3502,"benidorm","Alicante"));
mail2.push(new Mail("Trabajo","avion.es@gmail.com"));
telefono2.push(new Telefono("casa","603603603"));
let p2=new Persona("Elena","Suarez",26,"05432122A",new Date("1995-11-28"),"rosa","mujer",direccion2,mail2,telefono2,"Notas Elena");
personas.push(p2);

console.log ('------------- Persona 3------------------');
let direccion3 :Array <Direccion> =[];
let mail3 :Array <Mail> =[];
let telefono3:Array <Telefono> =[];
direccion3.push(new Direccion("Calle Salamanca",48,6,"A",28939,"Arroyomolinos","Madrid"));
mail3.push(new Mail("Casa","casa@gmail.com"),new Mail("Trabajo","trabajo@gmail.com"));
telefono3.push(new Telefono("casa","604064604"),new Telefono("trabajo", "656656656"));
let p3=new Persona("Sandra","Martinez",45,"07707074A",new Date("1984-09-15"),"azul","mujer",direccion3,mail3,telefono3,"Comnetarios Sandra");
personas.push(p3);

console.log ('------------- Imprimir Personas------------------');
for (let i=0;i<personas.length;i++){
    console.log(personas[i]);
}

console.log ('------------- Imprimir personas con formateo de datos------------------');
for (let i=0;i<personas.length;i++){
console.log(personas[i].mostrarDatos(i));
}

console.log ('------------- buscar dni------------------');
let dni="05432122A";
for (let i=0;i<personas.length;i++){

    if(personas[i].buscarDni(dni)){
    
console.log ('------------- buscar dni antes------------------');
        console.log(personas[i].mostrarDatos(i));
        personas[i].direcciones=[];
        personas[i].mails=[];
        personas[i].telefonos=[];
        personas[i].direcciones.push(new Direccion("Avenida Nueva",21,10,"A",28027,"madrid","Madrid"));
        personas[i].mails.push(new Mail("Casa","nueva@gmail.com"));
        personas[i].telefonos.push(new Telefono("casa","66666666"));
        console.log ('------------- buscar dni despues------------------');
        console.log(personas[i].mostrarDatos(i));
    }

    }
console.log ('------------- DATIS ACTUALIZADOS------------------');
    for (let i=0;i<personas.length;i++){
        console.log(personas[i].mostrarDatos(i));
 }