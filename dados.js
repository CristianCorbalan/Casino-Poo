"use strict";
exports.__esModule = true;
exports.DadosCasino = void 0;
var DadosCasino = /** @class */ (function () {
    function DadosCasino(primerDado, segundoDado) {
        this.primerDado = primerDado;
        this.segundoDado = segundoDado;
    }
    DadosCasino.prototype.lanzarDados = function () {
        this.primerDado = Math.floor(Math.random() * (6 - 1)) + 1;
        this.segundoDado = Math.floor(Math.random() * (6 - 1)) + 1;
    };
    DadosCasino.prototype.calcularDados = function () {
        var sumar = this.primerDado + this.segundoDado;
        return sumar;
    };
    return DadosCasino;
}());
exports.DadosCasino = DadosCasino;
