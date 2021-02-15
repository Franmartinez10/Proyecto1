// RETO 3 - Clase calendar 
import { Person } from "./Person";

export class Calendar 

{
    public people: Person[];


    constructor()
{
        this.people = [new Person("Juan",18,"Tomelloso")];

}
    public printCalendar()
{ 
        console.log(this.people)

}
}

