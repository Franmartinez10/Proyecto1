// RETO 9 - Probar la clase Vector
import {Vector} from "./Vector"

let vectorito = new Vector(12,43);
let sumatorito = new Vector(12,53)

vectorito.add(sumatorito).print();
vectorito.mult(sumatorito).print();
vectorito.multN(23).print();
vectorito.subs(sumatorito).print();
