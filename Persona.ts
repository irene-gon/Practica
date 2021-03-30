import {Mail} from './Mail'
import {Telefono} from './Telefono'
import {Direccion} from './Direccion'

export class Persona {
   private _nombre:string;
   private _apellidos: string;
   private _edad: number;
   private  _dni:string;
   private  _cumpleaños:Date;
   private  _colorfavorito: string;
   private  _sexo: string;
   private _direcciones: Array<Direccion>;
   private _mails: Array<Mail>;
   private _telefonos: Array<Telefono>;
   private _notas: string;

    public get direcciones(): Array<Direccion> {
        return this._direcciones;
    }
    public set direcciones(value: Array<Direccion>) {
        this._direcciones = value;
    }
   

    public get mails(): Array<Mail> {
        return this._mails;
    }
    public set mails(value: Array<Mail>) {
        this._mails = value;
    }

    public get telefonos(): Array<Telefono> {
        return this._telefonos;
    }
    public set telefonos(value: Array<Telefono>) {
        this._telefonos = value;
    }

    public get notas(): string {
        return this._notas;
    }
    public set notas(value: string) {
        this._notas = value;
    }


    constructor(nombre:string, apellidos: string, edad: number, dni:string, cumpleaños:Date, colorfavorito: string, sexo: string, direcciones: Array<Direccion>, mails: Array<Mail>, telefonos: Array<Telefono>, notas: string){
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._edad =edad;
        this._dni=dni;
        this._cumpleaños=cumpleaños;
        this._colorfavorito=colorfavorito;
        this._sexo=sexo;
        this._direcciones=direcciones;
        this._mails= mails;
        this._telefonos =telefonos;
        this._notas=notas; 
    }

public get nombre():string{
    return this._nombre}
    
    
 public set nombre(nombre:string){
        this._nombre=nombre;
    }

public get apellidos():string{
        return this._apellidos}
        
        
public set apellidos(apellidos:string){
            this._apellidos=apellidos;
}
        
    
public get edad():number{
        return this._edad}
        
        
 public set edad(edad:number){
            this._edad=edad;
        }

public get dni():string{
            return this._dni}
            
            
public set dni(dni:string){
                this._dni=dni;
    }

public get colorFavorito():string{
        return this._colorfavorito}
        
        
public set colorFavorito(colorfavorito:string){
            this._colorfavorito=colorfavorito;
}
public get sexo():string{
    return this._sexo}
    
    
public set sexo(sexo:string){
        this._sexo=sexo;
}



    public get cumpleaños():Date{
        return this._cumpleaños}
        
        
public set cumpleaños(cumpleaños:Date){
            this._cumpleaños=cumpleaños;
}


private  mostrarDirecciones(value: Array<Direccion>):string{
let direcciones="";
for (let i=0;i<value.length;i++){
    direcciones= direcciones + value[i].mostrarDatos(i);
}
return direcciones;
}

private  mostrarMails(value: Array<Mail>):string{
    let mails="";
    for (let i=0;i<value.length;i++){
        mails=mails+ value[i].mostrarDatos(i);
    }
    return mails;
    }


private  mostrarTelefonos(value: Array<Telefono>):string{
    let telefonos="";
    for (let i=0;i<value.length;i++){
        telefonos=telefonos+ value[i].mostrarDatos(i);
    }
    return telefonos;
    }

public mostrarDatos(i:number):string{

let fecha = this.cumpleaños.getDate() + "-"+ this.cumpleaños.getUTCMonth()+ "-" +this.cumpleaños.getFullYear();
 let datos= 
 "Persona: " +(i+1)+"\n"+ 
 "- Nombre: "  +this.nombre+" "+ this.apellidos +"\n"+ 
 "- Edad: "+ this.edad + "años" +"\n"+ 
 "- Sexo: "+ this.sexo +"\n"+ 
 this.mostrarDirecciones(this.direcciones) +
 this.mostrarMails(this.mails)  +
this.mostrarTelefonos(this.telefonos) +
 "- Compleaños: "+ fecha  +"\n"+
"- DNI: " + this.dni+"\n"+
"- Color Favorito: "+ this.colorFavorito+ "\n"+  
 "- Notas: " + this.notas;
 return datos;

    }

public buscarDni (dni:string):boolean{
    if (this.dni==dni)
    return true;
    else return false;
}
}