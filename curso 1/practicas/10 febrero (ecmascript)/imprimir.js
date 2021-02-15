 // RETO 1
 
    imprimir_paremetro = (t="No has introducido ningun valor") => {

        console.log(t)
     }
     imprimir_paremetro();
// RETO 2
multiply = (x,y) => {return x*y}

// RETO 3 
var teta = [3,4,5];
funcionEma = (teta=[0]) => 
{ let suma = 0;
    if(Array.isArray(teta) == true ){
        for(let i=0;i<teta.length;i++){
        suma = teta[i] + suma
}}
    else if(teta === null){ 
        teta = 0;
    
}   else if(Array.isArray(teta) == false){console.log("No has introducido un Array")}
    
    console.log(suma)
}


funcionEma()

// RETO 4
const frase = ("ese Jose como  mola se merece una ola")
cifrador = (frase) => {
    let codAscii = [];
    for(let i=0;i<frase.length;i++) {
       codAscii[i] = frase[i].charCodeAt();
    }  console.log(codAscii)

}
cifrador(frase);

// // RETO 5

// class Password {
//     constructor(length, password = 8){
//         this.length = length;
//         this.password = password;
//     }
//     isStrong(){if(this.password.length > this.length){
//         var bool = true;
//     } else {return false;}

//     // generatepass(){
//     //     let contraseñaAleatoria = "";
//     //     const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     //     for(let i=0;i<this.length;i++){
//     //         contraseñaAleatoria += letras.charAt(Math.floor(Math.random())

//     //     }
//     generatepass(){
//         let contraseñaAleatoria = "";



//     }
//     let codAscii = "";
//     for(let i=0;i<this.length;i++) {
//        codAscii += codAscii.charCodeAt();
//     }  console.log(codAscii)
//     }

//  }
// }

// var passcodi = new Password("HolaPepe")