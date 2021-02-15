//RETO 1

var lucesSemaforo = ""

if (lucesSemaforo == "green"){

    console.log("Puedes Pasar")
}
else {"Espere a que la luz se torne verde :)"};

// Reto 2
var recetas = "Alcachofas"
switch(recetas) {
    case "Alcachofas": 
        console.log("Debe usted comer hoy: Alcachofas con Jamón")
    break;
    case "Espinacas":
        console.log("Debe usted comer hoy: Espinacas a lo Popeye")
        break;
    case "Jamones":
        console.log("Coma usted Melón con Jamón para este tiempecito")
        break;
    case "Lomo":
        console.log("Este lomo yo me lo como")
        break;
    case "noodles":
        console.log("Si noodles te toca preparar, saca los palillos a pasear")
        break;
    case "Chuletas":
        console.log("Hoy comerás chuletas, recuerda guardar un tupper para tu examen de mañana")
        break;
    case "Verduras":
        console.log("De estas cosas te puedes llenar sin tener miedo de tu tripa engordar")
        break;
    case "Habas":
        console.log("hagas lo que hagas, come habas")
        break;
    case "Tocino":
        console.log("No comas mucho tocino si no te quieres parecer a un gorrino")
        break;
    case "Salchichón":
        console.log("Come mucho salchichón para que te crezca un poco el c...tón")
        break;
    default: 
        console.log("Imposible proponer receta")
        

}

// RETO 3

var numDePlatos = 3
var ExisteDj = true 
var hBarraLibre = 3
var coctelBienvenida = false

if ((numDePlatos == 3 && ExisteDj == true && hBarraLibre >= 1) || (coctelBienvenida== true && numDePlatos == 2 && hBarraLibre == 1)) 

{console.log("Ha llegado usted al sitio correcto")

} else {"Ninguna opción se contempla en el restaurante de su elección"}


//RETO 4 

var Fran = {
    "nombre":"Fran",
    "apellido":"Martinez",
    "añonacimiento":1996,
    "aficiones":["Leer","Salir con los amigos","escalar"],
    "dni":{
        "añoExpedicion":2010,
        "lugarNacimiento":"Tomelloso",
        "colorPelo":"Rubio Platino"
    }
}
var Clara = {
    "nombre":"Clara",
    "apellido":"Campoamor",
    "añonacimiento":1922,
    "aficiones":["Leer","Salir con los amigos","Escribir"],
    "dni":{
        "añoExpedicion":1945,
        "lugarNacimiento":"Madrid",
        "colorPelo":"Castaño"
    }
}
var Pablo = {
    "nombre":"Pablo",
    "apellido":"Iglesias",
    "añonacimiento":1974,
    "aficiones":["Leer","Politica","la naturaleza"],
    "dni":{
        "añoExpedicion":2004,
        "lugarNacimiento":"Vallecas",
        "colorPelo":"Moreno"
    }
}
var Sofia = {
    "nombre":"Sofia",
    "apellido":"Borbón",
    "añonacimiento":2006,
    "aficiones":["Leer","hípica","debates"],
    "dni":{
        "añoExpedicion":2015,
        "lugarNacimiento":"Madrid",
        "colorPelo":"Castaño"
    }
}

var personas = [Sofia,Pablo,Fran,Clara]

// RETO 4


if (personas[0].colorPelo=="Castaño"){
    console.log("<b> Sofia tiene el pelo castaño")
}
else if (personas[1].colorPelo=="Castaño"){
    console.log("<b> Pablo tiene el pelo castaño")
}

else if (personas[1].colorPelo=="Castaño"){
    console.log("<b> Pablo tiene el pelo castaño")   }
else if (personas[2].colorPelo=="Castaño"){
        console.log("<b> Fran tiene el pelo castaño")}
else if (personas[3].colorPelo=="Castaño"){
        console.log("<b> Clara tiene el pelo castaño")}
    
    
    
    
    
    
