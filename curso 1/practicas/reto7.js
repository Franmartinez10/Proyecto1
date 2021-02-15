var hijo = {
    "nombre": "Carlos",
    "apellidos": ["Oliva", "Granado"],
    "edad": 29,
    "colorPelo": "negro",
    "dinero": 3000,
    "coches": [{
        "marca": "Mazda",
        "numeroAsientos": 5,
        "esElectrico": false
    },{
        "marca": "Opel",
        "numeroAsientos": 1,
        "esElectrico": false
    }],
    "padres": [{
        "nombre": "Juan",
        "apellidos": ["Torres", "Ramirez"],
        "edad":62,
        "colorPelo": "negro",
        "dinero": 100000,
        "coches": [{
            "marca": "Mustang",
            "numeroAsientos": 5,
            "esElectrico": false
        },{
            "marca": "Seat",
            "numeroAsientos": 5,
            "esElectrico": false
        },{
            "marca": "Subaru",
            "numeroAsientos": 5,
            "esElectrico": false
        }],
        "padres":[{
            "nombre": "Pablo",
            "apellidos": ["Martinez", "Ramirez"],
            "edad": 95,
            "dinero": 10000,
            "colorPelo": "blanco",
            "coches": [{
                "marca": "VW",
                "numeroAsientos": 4,
                "esElectrico": false
            }],
        },{
            "nombre": "Lopez",
            "apellidos": ["Manrique", "Sevilla"],
            "edad": 90,
            "dinero": 10000,
            "colorPelo": "rubio",
            "coches": [{
                "marca": "Seat",
                "numeroAsientos": 2,
                "esElectrico": true
            },{
                "marca": "Ford",
                "numeroAsientos": 1,
                "esElectrico": false
        }]
        }]  
    },{
        "nombre": "Pilar",
        "apellidos": ["Onsurbe", "Lara"],
        "edad":59,
        "colorPelo": "castaño",
        "dinero": 15000,
        "coches": [{
            "marca": "Toyota",
            "numeroAsientos": 6,
            "esElectrico": false
        },{
            "marca": "Honda",
            "numeroAsientos": 4,
            "esElectrico": false
        }],
        "padres":[{
            "nombre": "Victor",
            "apellidos": ["Lopez", "Hoyos"],
            "edad": 86,
            "dinero": 60000,
            "colorPelo": "castaño",
            "coches": [{
                "marca": "Opel",
                "numeroAsientos": 5,
                "esElectrico": false
            },{
                "marca": "Mini",
                "numeroAsientos": 4,
                "esElectrico": true
            }],
        },{
            "nombre": "Petra",
            "apellidos": ["Torres", "Ramirez"],
            "edad": 81,
            "dinero": 1000,
            "colorPelo": "negro",
            "coches": [{
                "marca": "Tesla",
                "numeroAsientos": 5,
                "esElectrico": true
            },{
                "marca": "Hyundai",
                "numeroAsientos": 5,
                "esElectrico": false
            }],
        }]
    }]
}

if(hijo.padres[1].padres[1].colorPelo!="castaño" && hijo.padres[0].padres[0].coches.length==1 ){
    if(hijo.colorPelo=="verde"){hijo.colorPelo="azul"} hijo.colorPelo="verde"
}
if((hijo.padres[0].dinero)+(hijo.padres[1].dinero)+(hijo.padres[0].padres[0].dinero)+(hijo.padres[1].padres[1].dinero)>100000){

    hijo.coches.push({"marca":"Ferrari",
                  "numeroAsientos":2,
                   "esElectrico":true} )       }        
else if((hijo.padres[0].dinero)+(hijo.padres[1].dinero)+(hijo.padres[0].padres[0].dinero)+(hijo.padres[1].padres[1].dinero)< 35000 && (hijo.padres[0].dinero)+(hijo.padres[1].dinero)+(hijo.padres[0].padres[0].dinero)+(hijo.padres[1].padres[1].dinero)>10000 ){

    hijo.coches.push({"marca":"Tesla",
                "numeroAsientos":2,
                "esElectrico":true} )       }
                else if((hijo.padres[0].dinero)+(hijo.padres[1].dinero)+(hijo.padres[0].padres[0].dinero)+(hijo.padres[1].padres[1].dinero)< 35000 && (hijo.padres[0].dinero)+(hijo.padres[1].dinero)+(hijo.padres[0].padres[0].dinero)+(hijo.padres[1].padres[1].dinero)>10000 ){

    hijo.coches.push({"marca":"Tesla",
                "numeroAsientos":2,
                "esElectrico":true} )       }
else if((hijo.padres[0].dinero)+(hijo.padres[1].dinero)+(hijo.padres[0].padres[0].dinero)+(hijo.padres[1].padres[1].dinero)<5000)

    hijo.coches.push({"marca":"Peugeot",
                "numeroAsientos":5,
                "esElectrico":true} )   

if (hijo.padres[0].coches.length>2){ 
    hijo.coches.unshift(hijo.padres[0].coches[0]);
    hijo.padres[0].coches.shift(hijo.padres[0].coches[0]);

    if(hijo.padres[1].coches.length>3){
        hijo.coches.unshift(hijo.padres[1].coches[0]);
        hijos.padres[1].coches.shift(hijo.padres[1].coches[0]);

    }
}
if((hijo.padres[1].padres[0].coches[0].esElectrico)|| (hijo.padres[1].padres[0].coches[1].esElectrico)||(hijo.padres[1].padres[0].coches[3].esElectrico)){
    hijo.padres[1].padres[0].dinero += 5000;
    hijo.padres[1].padres[1].dinero += 5000;

}
if(hijo.padres[0].padres[1].coches[0].numeroAsientos<hijo.padres[1].padres[1].coches[1].numeroAsientos){
    hijo.padres[1].padres[1].coches.push({
        "marca": "Seat",
        "numeroAsientos": 1,
        "esElectrico": false
})
}
if(hijo.padres[0].padres[0].edad>hijo.padres[0].padres[0].edad){
    hijo.padres[0].padres[0].nombre="El abuelo más anciano de la familia"
} else {hijo.padres[1].padres[0].nombre="El abuelo más anciano de la familia"}
console.log(hijo.padres[1].padres[0].nombre)
console.log(hijo.padres[0].padres[0].nombre)

if(
//Padre 
(hijo.padres[0].coches[0].esElectrico) || (hijo.padres[0].coches[1].esElectrico) || (hijo.padres[0].coches[2].esElectrico)) && 
//Madre
(hijo.padres[1].coches[0].esElectrico) || (hijo.padres[1].coches[1].esElectrico) || (hijo.padres[0].coches[2].esElectrico)) && 




)
