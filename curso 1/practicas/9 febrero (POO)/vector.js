class Vector{
    constructor(n,m){
    var numeros = new Array(n)
    for(var i=0; i< n ;i++){
        numeros[i]= Math.round(Math.random()*m);  
    }
} 
module.exports={Vector}
