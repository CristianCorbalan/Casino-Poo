export abstract class Casino{
    protected tipoDejuego:string;
    protected valorDeApuesta:number;
    protected probabilidad:number;
    constructor(tipoDeJuego:string, valorDeApuesta:number, probabilidad:number){
        this.tipoDejuego = tipoDeJuego;
        this.valorDeApuesta = valorDeApuesta;
        this.probabilidad = probabilidad;
    }
    getTipoDeJuego():string{
        return this.tipoDejuego;
    }
    getValorDeApuesta():number{
        return this.valorDeApuesta;
    }
    getProbabilidad():number{
        return this.probabilidad;
    }
    abstract iniciarJuego():void;
    abstract elegirJuego()
    }