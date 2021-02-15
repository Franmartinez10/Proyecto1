"use strict";
exports.__esModule = true;
exports.Vector = void 0;
// RETO 8 - Crear clase Vector
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = new Array(n);
        for (var i = 0; i < n; i++)
            this.elements[i] = Math.round(Math.random() * k);
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        var addSum = new Vector(23, 43);
        for (var i = 0; i < this.elements.length; i++) {
            addSum[i] = v1.elements[i] + this.elements[i];
        }
        return addSum;
    };
    Vector.prototype.subs = function (v1) {
        var subsSum = new Vector(23, 43);
        for (var i = 0; i < this.elements.length; i++) {
            subsSum[i] = v1.elements[i] - this.elements[i];
        }
        return subsSum;
    };
    Vector.prototype.mult = function (v1) {
        var multSum = new Vector(34, 54);
        for (var i = 0; i < this.elements.length; i++) {
            multSum[i] = v1.elements[i] * this.elements[i];
        }
        return multSum;
    };
    Vector.prototype.multN = function (n) {
        var multN = new Vector(12, 54);
        for (var i = 0; i < this.elements.length; i++) {
            multN[i] = this.elements[i] * n;
        }
        return multN;
    };
    return Vector;
}());
exports.Vector = Vector;
