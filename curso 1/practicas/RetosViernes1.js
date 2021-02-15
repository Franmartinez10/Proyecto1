// RETO 1

document.write("<b>Lorem ipsum dolor sit amet,</b> consectetur adipisicing elit. <br> <i>Phasellus mattis vehicula consequat. Proin dapibus nunc quam, nec dicvtum erat feugiat viate.</i><br><br> <del>Curabitur dignissim nisi a est vulputate trisquite.</del><br>Carabitur maximus erat leo, sit amet facilisis est egestas sed.<br><br> <b>Morbi aliquam, ipsum eget volut blandit, lectus odio condimentus dui, eget dictum quam ipsum sit amet nulla.</b>")

// RETO 2

var pais = prompt("España o de Fuera");
var precio = prompt("Precio")

if(pais=="España" && precio >=2000){
    document.write("El importe bruto es : " + (precio * 1.16))
}
else if(pais=="España" && precio <2000){
    document.write("El importe bruto es : " + (precio * 1.1))
}
if(pais=="Fuera" && precio >=2000){
    document.write("El importe bruto es : " + ((precio * 1.16)*1.1))
}
else if(pais=="Fuera" && precio <2000){
    document.write("El importe bruto es : " + ((precio * 1.1)*1.1))
}

// RETO 3

for(var i= 1; i<101; i++){
i *= i
} console.log(i)