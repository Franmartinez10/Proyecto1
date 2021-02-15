
// Crear Vector  
function creaVector(n,m){
    var numeros = new Array(n)
    for(i=0;i<n;i++){
        numeros[i] = (Math.round(Math.random())*m)
    } return numeros
} console.log(creaVector(2,6))
// Suma vector 

var v1 = creaVector(4,6);
var v2 = creaVector(4,5);

function sumaVector(v1,v2){
    var suma = new Array();
    if(v1.length == v2.length){
        for(i=0;i<v1.length;i++){
        suma[i] = v1[i]+v2[i]


        }
    }
return suma
}
console.log(sumaVector(v1,v2))

// Producto Número vector

function multVector(n,v1){
    var resultado = new Array();
    for(i=0;i<v1.length;i++){
        resultado[i] = v1[i] * n

    }
return resultado
}
console.log(multVector(4,v1))

// Resta Vector 

function restaVector(v1,v2){
if(v1.length==v2.length){
    var resultado = new Array()
    for(i=0;i<v1.length;i++){
        resultado[i] = v1[i]-v2[i]

    }


}
return resultado
}
console.log(restaVector(v1,v2))

// Producto vector 
function multElementosVector(v1,v2){
if(v1.length==v2.length){
    var resultado = new Array()
    for(i=0;i<v1.length;i++){
        resultado[i] = v1[i]*v2[i]

    }

return resultado
}
}
console.log(multElementosVector(v1,v2))

module.exports={creaVector,sumaVector,restaVector,multElementosVector,multVector,}