export class Juegos{
    protected tematicaDeJuego: string;
    protected listaDeJuegos: string;
    protected seleccionarJuego:string;
    constructor(tematicaDeJuego:string, listaDeJuegos:string, seleccionarJuego:string){
        this.tematicaDeJuego = tematicaDeJuego;
        this.listaDeJuegos = listaDeJuegos;
        this.seleccionarJuego = seleccionarJuego;
    }
    getTematicaDeJuego():string{
        return this.tematicaDeJuego;
    }
    getListaDeJuegos():string{
        return this.listaDeJuegos;
    }
    getSeleccionarJuego():string{
        return this.seleccionarJuego;
    }
}