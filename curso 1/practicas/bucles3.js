//RETO 3.1

var numFactorial= 10
var r = 1
for (var i=numFactorial; i>0; i--){
 r = r * i
}  console.log(r)

var i=1;
var r=1;
while(i<10){
    r = r * i
    i++;
} console.log(r)
//RETO 3.2
var numerosSueltos= [1,2,3,4,5,6,7,8,9,10]
i=0;
while (numerosSueltos[i]<10){
if(numerosSueltos[i] % 2 ==0){console.log(numerosSueltos[i])}
i++;
}
//RETO 3.3

var i;
for (i=0; i<101; i++){
    i += i
} console.log(i)
// RETO 3.4
var nombres= ["Lope", "jorge", "Juan", "Cirilo", "Pepe"]
var i=0;

i=0;
while((nombres[i]!= "Pepe")&&(i<nombres.length)){i++;}

    if(nombres[i]=="Pepe"){console.log("Pepe se encuentra en la posición nº: " + i)}
    else {console.log("Pepe se encuentra en la posición nº: " + i)}




// RETO 4
var vectores=[];
var i=0;
for (i=0; i<101; i++){
    vectores.push(Math.round(Math.random()*20))

} console.log(vectores);
var vectores1=[];
var i=0;
for (i=0; i<101; i++){
    vectores1.push(Math.round(Math.random()*20))

} console.log(vectores1)

//RETO 5

console.log(vectores+vectores1)