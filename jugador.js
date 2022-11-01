"use strict";
exports.__esModule = true;
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(nombre, apellido, idJugador, dineroDisponible) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.idJugador = idJugador;
        this.dineroDisponible = dineroDisponible;
    }
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.getApellido = function () {
        return this.apellido;
    };
    Jugador.prototype.getIdJugador = function () {
        return this.idJugador;
    };
    //consultar si lo hago de tipo abstracto
    Jugador.prototype.getDineroDisponible = function () {
        return this.dineroDisponible;
    };
    Jugador.prototype.setDineroDisponible = function (paramDineroDisp) {
        this.dineroDisponible = paramDineroDisp;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
