export class Telefono{
    private _tipo:string;
    private _numero:string;
    
    constructor (tipo:string, numero:string){
        this._tipo=tipo;
        this._numero=numero;
    }
    public get tipo():string{
    return this._tipo}
    
    
    public set tipo(tipo:string){
        this._tipo=tipo;
    }
    
    public get numero():string{
        return this._numero}
        
        
        public set numero(numero:string){
            this._numero=numero;
        }


    public mostrarDatos(i:number):string{
        let datos= 
        "- Telefono " +(i+1)+" :"+ 
        " Tipo: "  +this.tipo + 
        ", Numero: "+ this.numero   +"\n";
        return datos;
   }
    }