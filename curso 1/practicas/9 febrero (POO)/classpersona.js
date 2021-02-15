class Persona{
    constructor(altura,peso,colorOjos,sexo,anyoNacimiento,aficiones){
        this.altura = altura;
        this.peso = peso;
        this.colorOjos = colorOjos;
        this.sexo = sexo;
        this.anyoNacimiento = anyoNacimiento;
        this.aficiones = aficiones;


    }
    calcularImc(){
        return this.peso/(this.altura*this.altura)*10000;

    }
    edad(esteAño){ 
        var esteAño = new Date().getFullYear();
        return esteAño - this.anyoNacimiento;
    }
    mostrarTodos(){
        console.log("-" + this.altura)
        console.log("-" + this.peso)
        console.log("-" + this.colorOjos)
        console.log("-" + this.sexo)
        console.log("-" + this.anyoNacimiento)
        console.log("-" + this.anyoNacimiento)
   
    }
    getAltura(){
        return this.altura;
    }
    getPeso(){
        return this.peso;
    }
    getColorOjos(){
        return this.colorOjos;
    }
    getSexo(){
        return this.sexo;
    }
    getAnyoNacimiento(){
        return this.anyoNacimiento;
    }
    setAltura2(altura){
        this.altura = altura;
    }
    setPeso2(peso){
        this.peso = peso;
    }
    setColorOjos2(colorOjos){
        this.colorOjos = colorOjos
    }
    setSexo2(sexo){
         this.sexo = sexo;
    }
    setAnyoNacimiento2(anyoNacimiento){
        this.anyoNacimiento = anyoNacimiento; 
    }
    mostrarAficiones(){
        for (let index = 0; index < this.aficiones.length; index++) {
            
            console.log(this.aficiones[index])
        }

    }
}
module.exports ={Persona}