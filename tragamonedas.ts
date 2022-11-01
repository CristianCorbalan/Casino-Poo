export class Tragamonedas {
    private rueda1 = new Array<string>
    private rueda2 = new Array<string>
    private rueda3 = new Array<string>
    private estadoFinalDeRuedas: number;
    constructor(estadoFinalDeRuedas:number){
        this.rueda1 = ["Trebol", "Manzana", "Cereza", "Bonus", "Diamante", "Siete"];
        this.rueda2 = ["Trebol", "Manzana", "Cereza", "Bonus", "Diamante", "Siete"];
        this.rueda3 = ["Trebol", "Manzana", "Cereza", "Bonus", "Diamante", "Siete"];
        this.estadoFinalDeRuedas = estadoFinalDeRuedas;
    }
}