


var Fran = {
    "nombre":"Fran",
    "apellido":"Martinez",
    "añonacimiento":1996,
    "aficiones":["Leer","Salir con los amigos","escalar"],
    "dni":{
        "añoExpedicion":2010,
        "lugarNacimiento":"Tomelloso",
    },        "colorPelo":"Rubio Platino"

}
var Clara = {
    "nombre":"Clara",
    "apellido":"Campoamor",
    "añonacimiento":1922,
    "aficiones":["Leer","Salir con los amigos","Escribir"],
    "dni":{
        "añoExpedicion":1945,
        "lugarNacimiento":"Madrid",
    },        "colorPelo":"Castano"

}
var Pablo = {
    "nombre":"Pablo",
    "apellido":"Iglesias",
    "añonacimiento":1974,
    "aficiones":["Leer","Politica","la naturaleza"],
    "dni":{
        "añoExpedicion":2004,
        "lugarNacimiento":"Vallecas",
    } ,       "colorPelo":"Moreno"

}
var Sofia = {
    "nombre":"Sofia",
    "apellido":"Borbón",
    "añonacimiento":2006,
    "aficiones":["dormir","hípica","comer"],
    "dni":{
        "añoExpedicion":2016,
        "lugarNacimiento":"Madrid",
    } ,   "colorPelo":"Negro"

}

var personas = [Sofia,Pablo,Fran,Clara]

// RETO 4


if (personas[0].colorPelo == "Castano"){
    console.log("Sofia")
}
if (personas[1].colorPelo == "Castano"){
    console.log("Pablo")
}

if (personas[2].colorPelo=="Castano"){
        console.log("Fran")}
if (personas[3].colorPelo=="Castano"){
        console.log("Clara")}




if (personas[0].añonacimiento < 1991){
    console.log("Sofia")
}
if (personas[1].añonacimiento < 1991){
    console.log("Pablo")
}

if (personas[2].añonacimiento < 1991){
        console.log("Fran")}
if (personas[3].añonacimiento < 1991){
        console.log("Clara")}


if ((personas[0].colorPelo=="Negro" && personas[0].dni.añoExpedicion<2011)||(personas[0].añonacimiento>2003 && (personas[0].aficiones.includes("dormir") || personas[0].aficiones.includes("comer")))){
    console.log(personas[0].nombre + " es la persona que buscas")
}
if ((personas[1].colorPelo=="Negro" && personas[1].dni.añoExpedicion<2011)||(personas[1].añonacimiento>2003 && (personas[1].aficiones.includes("dormir") || personas[1].aficiones.includes("comer")))){
    console.log(personas[1].nombre + " es la persona que buscas")
}
if ((personas[2].colorPelo=="Negro" && personas[0].dni.añoExpedicion<2011)||(personas[2].añonacimiento>2003 && (personas[2].aficiones.includes("dormir") || personas[2].aficiones.includes("comer")))){
    console.log(personas[2].nombre + " es la persona que buscas")
}
if ((personas[3].colorPelo=="Negro" && personas[3].dni.añoExpedicion<2011)||(personas[3].añonacimiento>2003 && (personas[3].aficiones.includes("dormir") || personas[3].aficiones.includes("comer")))){
    console.log(personas[3].nombre + " es la persona que buscas")
}

    