// RETO 1.1
var i;
for (i=1; i<11; i++){

console.log(i);

}
// RETO 1.2
var i;
for (i=0; i<11; i++ ){
    if(i % 2 ==0){console.log(i)}
}
// RETO 1.3
var i;
for (i=0; i<11; i++ ){
    if((i % 3 == 0)&&(i % 2 != 0)){console.log(i)}
}
// RETO 1.4 While
var i = 0;
while (i<11){
    console.log(i)
i++
}
var i = 0;
while (i<11){
    if(i % 2 ==0){console.log(i)}
    i++;
}
i=0;
while (i<11){    
    if((i % 3 == 0)&&(i % 2 != 0)){console.log(i)}

    i++;
}
// RETO 1.4 con do/while
i=1; 
do {console.log(i)
    i++
} while (i<11)
i=0;
do{
    if(i % 2 ==0){console.log(i)}
    i++;
} while(i<11)
i=0;
do {    
    if((i % 3 == 0)&&(i % 2 != 0)){console.log(i)}
    i++;
} while (i<11)