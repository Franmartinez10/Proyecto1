"use strict";
exports.__esModule = true;
exports.Calendar = void 0;
// RETO 3 - Clase calendar 
var Person_1 = require("./Person");
var Calendar = /** @class */ (function () {
    function Calendar() {
        this.people = [new Person_1.Person("Juan", 18, "Tomelloso")];
    }
    Calendar.prototype.printCalendar = function () {
        console.log(this.people);
    };
    return Calendar;
}());
exports.Calendar = Calendar;
