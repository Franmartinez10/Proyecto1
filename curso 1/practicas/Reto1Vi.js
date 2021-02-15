var libros = ["Ready player one","El nombre del viento","El temor de un hombre sabio","Cien años de soledad","Origen"]
var negrita = libros[0].length
var libroPro = ""
// for(var i = 0; i<libros.length; i++){
// document.write("<br>" + libros[i]+"["+libros[i].length+"]")
// } 

for(var i = 0; i<libros.length;i++){
    if(negrita<libros[i].length){
        negrita = libros[i].length
        libroPro = libros[i]
    } 
}
for(var i = 0; i<libros.length; i++){
    if(libros[i] == libroPro){
        document.write("<br>"+libros[i].bold()+"["+libros[i].length+"]")
    } else{
        document.write("<br>"+libros[i]+"["+libros[i].length+"]")
    }
} 