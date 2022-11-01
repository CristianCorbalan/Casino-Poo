export class DadosCasino{
    private primerDado:number;
    private segundoDado:number;
    constructor(primerDado:number, segundoDado:number){
        this.primerDado = primerDado;
        this.segundoDado = segundoDado;
    }
    lanzarDados():void{
        this.primerDado = Math.floor(Math.random()*(6-1))+1;
        this.segundoDado =  Math.floor(Math.random()*(6-1))+1;
    }
    calcularDados():number{
        let sumar: number = this.primerDado + this.segundoDado;
        return sumar;
    }
}