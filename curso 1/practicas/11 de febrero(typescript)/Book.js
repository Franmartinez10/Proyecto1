"use strict";
exports.__esModule = true;
exports.Book = void 0;
// RETO 4
var Book = /** @class */ (function () {
    // Constructor de la clase Book 
    function Book(title, npages, issn, author, editorial) {
        this.title = title;
        this.npages = npages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getNpages = function () {
        return this.npages;
    };
    Book.prototype.getIssn = function () {
        return this.issn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setNpages = function (npages) {
        this.npages = npages;
    };
    Book.prototype.setIssn = function (issn) {
        this.issn = issn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        var stringLibros = "Titulo - " + this.title + "\n" +
            "Numero de paginas - " + this.npages + "\n" +
            "ISSN - " + this.issn + "\n";
        "Autor - " + this.author + "\n" +
            "Editorial - " + this.editorial + "\n";
        return stringLibros;
    };
    return Book;
}());
exports.Book = Book;
