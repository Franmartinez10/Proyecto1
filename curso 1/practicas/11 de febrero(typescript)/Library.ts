import { Book } from "./Book"
export class Library
{
    private books:Book[];
    private address:string;
    private manager:string;


    constructor(books:Book[],address:string, manager:string)

    {

        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    public getBooks():Book[]
    {
        return this.books;
    }
    public getAddress():string
    {
        return this.address;
    }
    public getManager():string
    {
        return this.manager;
    }

    public setBooks(books:Book[])
    {
        this.books = books;
    }
    public setAddress(address:string)
    {
        this.address = address;

    }
    public setManager(manager:string)
    {
        this.manager = manager;
    }
    public toString():string
    {   let LibronString:string = "";
       for(let i=0;i< this.books.length;i++)
       {
           let LibronString = "Libro nº: " + (i+1) + this.books[i]
       }      return LibronString;
    }
    // RETO 6 - Crear métodos aux
    public getNumberOfBooks():number
    {   
        return this.books.length;
    }


    public findByAuthor(author:string):Book[]
    {   let librosCoincidentes = [];
        for(let i=0;i<this.books.length;i++)
        {
            if(this.books[i].getAuthor()===author)
            {
                librosCoincidentes.push(this.books[i])
            }        

        }     
           
        return librosCoincidentes;
    }
}      