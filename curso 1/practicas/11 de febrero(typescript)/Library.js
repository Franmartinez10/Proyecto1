"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setBooks = function (books) {
        this.books = books;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toString = function () {
        var LibronString = "";
        for (var i = 0; i < this.books.length; i++) {
            var LibronString_1 = "Libro nº: " + (i + 1) + this.books[i];
        }
        return LibronString;
    };
    // RETO 6 - Crear métodos aux
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var librosCoincidentes = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() === author) {
                librosCoincidentes.push(this.books[i]);
            }
        }
        return librosCoincidentes;
    };
    return Library;
}());
exports.Library = Library;
