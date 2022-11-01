"use strict";
exports.__esModule = true;
exports.Juegos = void 0;
var Juegos = /** @class */ (function () {
    function Juegos(tematicaDeJuego, listaDeJuegos, seleccionarJuego) {
        this.tematicaDeJuego = tematicaDeJuego;
        this.listaDeJuegos = listaDeJuegos;
        this.seleccionarJuego = seleccionarJuego;
    }
    Juegos.prototype.getTematicaDeJuego = function () {
        return this.tematicaDeJuego;
    };
    Juegos.prototype.getListaDeJuegos = function () {
        return this.listaDeJuegos;
    };
    Juegos.prototype.getSeleccionarJuego = function () {
        return this.seleccionarJuego;
    };
    return Juegos;
}());
exports.Juegos = Juegos;
