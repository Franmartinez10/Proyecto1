"use strict";
exports.__esModule = true;
// RETO 7 - Probar la clase Libreria
var Book_1 = require("./Book");
var Library_1 = require("./Library");
var Librito = new Book_1.Book("Introducción a JS", 233, "23434-564FD", "Josheph Smith", "Now Edition");
var Librito2 = new Book_1.Book("Introducción a JS", 233, "23434-564FD", "Josheph Smith", "Now Edition");
var Librito3 = new Book_1.Book("Introducción a JS", 233, "23434-564FD", "Josheph Smith", "Now Edition");
var librecita = new Library_1.Library([Librito, Librito2, Librito3], "Madrid", "Juan De la torre");
librecita.toString();
console.log(librecita.findByAuthor("Josheph Smith").toString());
