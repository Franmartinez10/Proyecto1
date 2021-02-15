var Vector = require("./vector")

// Reto 1

function crearMatriz(n,m,k){
    var matriz1 = []
    for(i=0;i<n;i++){
        matriz1.push(Vector.creaVector(m,k))




    }
 return matriz1
} //  console.log(crearMatriz(5,6,7))

// var m1 = crearMatriz(4,6,8)
// var m2 = crearMatriz(4,6,9)
// function sumarMatrices(m1,m2){
//     if(m1.length == m2.length)
//     var sumaM = new Array()
//     {
//         for(i=0;i<m1.length;i++){
//             sumaM[i]=m1[i]+m2[i]
//         }
//     } return sumaM
// } console.log(sumarMatrices(m1,m2))


var m1 = crearMatriz(4,6,8)
var m2 = crearMatriz(4,6,9)
function sumarMatrices(m1,m2){
    if(m1.length == m2.length)
    var sumaM = new Array()
    {
        for(i=0;i<m1.length;i++){
            sumaM[i]=Vector.sumaVector(m1[i],m2[i])
        }
    } return sumaM
} //console.log(sumarMatrices(m1,m2))


function multMatrices(n,m1){
    var multiplicacion = new Array()
    for(i=0;i<m1.length;i++){
        multiplicacion[i] = Vector.multVector(n,m1[i])

    }
return multiplicacion;

    } // console.log(multMatrices(5,m1))

function restaMatriz(m1,m2){
    var resta = new Array()
    for(i=0;i<m1.length;i++){
        resta [i] = Vector.restaVector(m1[i],m2[i]);
    }
}
function MultiplicarMatriz(m1,m2){
    var multiplicar = [];
    if(m1.length==m2.length){
        for(i=0;i<m1.length;i++){
            multiplicar[i] = Vector.multElementosVector(m1[i],m2[i])
 


        }
return multiplicar;

    }


} console.log(MultiplicarMatriz(m1,m2))


