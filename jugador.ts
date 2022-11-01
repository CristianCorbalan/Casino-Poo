export class Jugador{
    private nombre:string;
    private apellido:string;
    private idJugador:number;
    protected dineroDisponible:number;
    constructor(nombre:string, apellido:string, idJugador:number, dineroDisponible:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.idJugador = idJugador;
        this.dineroDisponible = dineroDisponible;
    }
    getNombre():string{
        return this.nombre;
    }
    getApellido():string{
        return this.apellido;
    }
    getIdJugador():number{
        return this.idJugador;
    }
//consultar si lo hago de tipo abstracto
    getDineroDisponible():number{
        return this.dineroDisponible;
    }
    setDineroDisponible(paramDineroDisp:number):void{
        this.dineroDisponible = paramDineroDisp;
    }
    actualizarSaldo():number;
}