class Persona{
    constructor(altura,peso,colorOjos,sexo,anyoNacimiento,aficiones){
        this.altura = altura;
        this.peso = peso;
        this.colorOjos = colorOjos;
        this.sexo = sexo;
        this.anyoNacimiento = anyoNacimiento;
        this.aficiones = aficiones;


    }
    calcularImc(altura,peso){
        return peso/(altura*altura)*10000;

    }
    edad(anyoNacimiento){
        var esteAño = new date().getFullYear();
        return esteAño - anyoNacimiento;
    }
    mostrarTodos(){
        console.log("-" + this.altura)
        console.log("-" + this.peso)
        console.log("-" + this.colorOjos)
        console.log("-" + this.sexo)
        console.log("-" + this.anyoNacimiento)
    }
    get altura(){
        return this.altura;
    }
    get peso(){
        return this.peso;
    }
    get colorOjos(){
        return this.colorOjos;
    }
    get sexo(){
        return this.sexo;
    }
    get anyoNacimiento(){
        return this.anyoNacimiento;
    }
    // set altura(altura){
    //     this.altura = nuevaaltura;
    // }
    // set peso(peso){
    //     this.peso = nuevoPeso;
    // }
    // set colorOjos(colorOjos){
    //     this.colorOjos = nuevosOjos
    // }
    // set sexo(sexo){
    //      this.sexo = nuevoSexo;
    // }
    // set anyoNacimiento(anyoNacimiento){
    //     this.anyoNacimiento = nuevoNacimiento; 
    // }
    }

module.exports ={Persona}