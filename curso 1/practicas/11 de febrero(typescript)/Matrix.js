"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
var Vector_1 = require("./Vector");
var Matrix = /** @class */ (function () {
    function Matrix(n, m, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(new Vector_1.Vector(m, k));
        }
    }
    Matrix.prototype.print = function () {
        console.log(this.elements);
    };
    Matrix.prototype.addM = function (m1) {
        var addMatrix;
        for (var i = 0; i < m1.elements.length; i++) {
            addMatrix = m1[i].add(m1[i]);
        }
        return addMatrix;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
var matrixita = new Matrix(2, 32, 43);
matrixita.print();
matrixita.addM(matrixita).print();
