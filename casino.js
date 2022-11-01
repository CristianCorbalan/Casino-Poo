"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(tipoDeJuego, valorDeApuesta, probabilidad) {
        this.tipoDejuego = tipoDeJuego;
        this.valorDeApuesta = valorDeApuesta;
        this.probabilidad = probabilidad;
    }
    Casino.prototype.getTipoDeJuego = function () {
        return this.tipoDejuego;
    };
    Casino.prototype.getValorDeApuesta = function () {
        return this.valorDeApuesta;
    };
    Casino.prototype.getProbabilidad = function () {
        return this.probabilidad;
    };
    return Casino;
}());
exports.Casino = Casino;
