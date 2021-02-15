var myPersona = require("./classpersona")

    var p1 = new myPersona.Persona(5,5,"Verde", "Masculino", 12, ["Hola", "Adios"])
    var p2 = new myPersona.Persona(178,85,"Verde", "Masculino", 1996, ["Hola", "Adios"])
 p1.mostrarTodos();
 p2.mostrarTodos();
 console.log(p1.calcularImc());
 console.log(p2.edad());

