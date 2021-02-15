var myPersona = require("./classpersona");
var myAgenda = require("./Agenda");
    var p1 = new myPersona.Persona(5,5,"Verde", "Masculino", 12, ["Hola", "Adios"])
    var p2 = new myPersona.Persona(178,85,"Verde", "Masculino", 1996, ["Hola", "Adios"])
        var personas = [p1,p2]
var a1 = new myAgenda.Agenda(personas)

    a1.printPersonas();