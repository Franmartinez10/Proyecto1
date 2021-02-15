var num1 = 50
var num2 = 100
var tipoOperacion = "sum";
function calculadora(tipoOperacion, num1, num2){
    if(tipoOperacion == "sum"){
       var resultado = num1 + num2
    }
    else if (tipoOperacion= "subs"){
        var resultado = num1 - num2
    }
    else if (tipoOperacion= "mult"){
        var resultado = num1 * num2
    }    
    else if (tipoOperacion = "div"){
        var resultado = num1 / num2
    }
    return resultado;
}

console.log(calculadora(tipoOperacion, num1, num2))


