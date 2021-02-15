var Persona1= require("./classpersona")

// const persona1 = new Persona1.Persona(175,72,"verdes","male",1996,["Futbol","esgrima","surf"])
class Agenda{
   
   constructor(personas){ 
       this.personas = personas;

    }

    printPersonas(){
        for(var i=0;i<this.personas.length;i++){
            this.personas[i].mostrarTodos();
        }
    } 

}

var p1 = new Persona1.Persona(5,5,"Verde", "Masculino", 12, ["Hola", "Adios"])
 
p1.mostrarTodos();

module.exports={Agenda}

