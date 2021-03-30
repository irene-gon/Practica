export class Direccion{
private _calle:string;
private _numero:number;
private _piso:number;
private _letra:string;
private _codigopostal:number;
private _poblacion:string;
private _provincia:string;

constructor (calle:string, numero:number, piso:number, letra:string, codigopostal:number, poblacion:string, provincia:string){
 this._calle=calle;
this._numero=numero;
this._piso=piso;
this._letra=letra;
this._codigopostal=codigopostal;
this._poblacion=poblacion;
this._provincia=provincia;
}
public get calle():string{
return this._calle}


public set calle(calle:string){
    this._calle=calle;
}


public get numero():number{
    return this._numero}
    
    
 public set numero(numero:number){
        this._numero=numero;
    }


public get piso():number{
        return this._piso;
}
        
        
public set piso(piso:number){
            this._piso=piso;
}

public get letra():string{
            return this._letra;
}
            
            
 public set letra(letra:string){
                this._letra=letra;
 }

 public get codigopostal():number{
    return this._codigopostal;
}
    
    
public set codigopostal(codigopostal:number){
        this._codigopostal=codigopostal;
}


public get poblacion():string{
    return this._poblacion;
}
    
    
public set poblacion(poblacion:string){
        this._poblacion=poblacion;
}


public get provincia():string{
    return this._provincia;
}
    
    
public set provincia(provincia:string){
        this._provincia=provincia;
}

public mostrarDatos(i:number):string{

     let datos= 
     "- Direccion " +(i+1)+" :"+ 
     " Calle: "  +this.calle + 
     ", Numero: "+ this.numero  + 
     ", Piso: "+ this.piso +
     ", Letra: " + this.letra +
     ", Codigo Postal: " + this.codigopostal +
     ", Poblacion: " + this.poblacion  +
     ", Provincia: "+ this.provincia  +"\n";
     return datos;
}

}