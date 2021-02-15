// RETO 4
export class Book 
{
    private title:string;
    private npages:number;
    private issn:string;
    private author:string;
    private editorial:string;

// Constructor de la clase Book 
    constructor(title:string, npages:number,issn:string,author:string, editorial:string)
    
    {
        this.title = title;
        this.npages = npages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;

    }
    public getTitle():string
    {   return this.title;
    }
    public getNpages():number
    {
        return this.npages;
    }
    public getIssn():string
    {
        return this.issn;
    }
    public getAuthor():string
    {
        return this.author;
    }
    public getEditorial():string
    {
        return this.editorial;
    }
    
    public setTitle(title:string)
    {   
        this.title = title;
    }
    public setNpages(npages:number)
    {
        this.npages = npages;
    }
    public setIssn(issn:string)
    {
        this.issn = issn;
    }
    public setAuthor(author:string)
    {
        this.author = author;
    }
    public setEditorial(editorial:string)
    {
        this.editorial = editorial;
    }
    public toString():string
    {
        
        let stringLibros:string =
                "Titulo - " + this.title + "\n" +
                "Numero de paginas - " + this.npages + "\n" +
                "ISSN - " + this.issn + "\n" 
                "Autor - "  + this.author + "\n" +
                "Editorial - " + this.editorial + "\n";
         return stringLibros;
    } 
}