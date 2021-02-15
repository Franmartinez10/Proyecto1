// var matriz = []
// var matriz2 = []

// for (var i= 0;i<10;i++){
//     matriz[i].push((Math.round(Math.random()*50)));

//     for (var j=0;j<10;j++){
//         matriz[j].push((Math.round(Math.random()*50)));
// matriz2[j].push(matriz)

//     }
//     } 
// console.log(matriz2)


var matriz = new Array(10)
for (i=0;i<matriz.length;i++){
    matriz[i] = new Array(10)
    for (j=0;j<matriz.length;j++){
        matriz[i][j]= Math.round(Math.random()*50)
    


}
}
var matriz2 = new Array(10)
for (i=0;i<matriz2.length;i++){
    matriz2[i] = new Array(10)
    for (j=0;j<matriz2.length;j++){
        matriz2[i][j]= Math.round(Math.random()*50)
    


}       
}
for (i=0;i<matriz2.length;i++){
    for (j=0;j<matriz2.length;j++){
        matriz2[i][j] * (Math.round(Math.random()))

    }}
console.log(matriz)
console.log(matriz2)