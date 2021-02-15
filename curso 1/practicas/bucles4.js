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

for (i=0; i<personas.length; i++){
if(personas[i].colorPelo=="Castano"){
    console.log(personas[i].nombre + " tiene el pelo castaño")
}
if(personas[i].añonacimiento>1991){
    console.log(personas[i].nombre + " tiene más de 30")
}
if((personas[i].colorPelo=="Negro" && personas[i].añoExpedicion>2011)||(personas[i].añonacimiento>2003 && (personas[i].aficiones.includes("comer")||personas[i].aficiones.includes("dormir")))){
console.log(personas[i].nombre + " ha nacido en" + personas[i].dni.lugarNacimiento)


}

}