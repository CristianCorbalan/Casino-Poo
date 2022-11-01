export class RuedaDeLaAbundancia {
    private dineroAcumulado: number;
    private rueda = new Array<number>;
    constructor(dineroAcumulado:number){
        this.dineroAcumulado = dineroAcumulado;
        this.rueda = [1000, 40, 100, 50, 200, 20, 400, 0, 25, 100, 75, 60, 30, 500, 50, 100, 40, 250, 75, 125, 30, 150, 25,0];
    }
    getDineroAcumulado():number{
        return this.dineroAcumulado;
    }
}