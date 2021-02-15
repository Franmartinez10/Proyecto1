"use strict";
exports.__esModule = true;
// RETO 9 - Probar la clase Vector
var Vector_1 = require("./Vector");
var vectorito = new Vector_1.Vector(12, 43);
var sumatorito = new Vector_1.Vector(12, 53);
vectorito.add(sumatorito).print();
vectorito.mult(sumatorito).print();
vectorito.multN(23).print();
vectorito.subs(sumatorito).print();
