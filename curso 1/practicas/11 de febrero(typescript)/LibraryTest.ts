// RETO 7 - Probar la clase Libreria
import { Book } from "./Book";
import {Library} from "./Library";
var Librito = new Book("Introducción a JS", 233, "23434-564FD", "Josheph Smith", "Now Edition");
var Librito2 = new Book("Introducción a JS", 233, "23434-564FD", "Josheph Smith", "Now Edition");
var Librito3 = new Book("Introducción a JS", 233, "23434-564FD", "Josheph Smith", "Now Edition");


let librecita:Library = new Library([Librito,Librito2,Librito3],"Madrid","Juan De la torre")

librecita.toString();
console.log(librecita.findByAuthor("Josheph Smith").toString()) 

