const botonNumero = document.querySelectorAll("[data-numero]");
const botonOperador = document.querySelectorAll("[data-operador]");
const botonIgual = document.querySelector("[data-igual]");
const botonBorraTodo = document.querySelector("[data-borrar-todo]");
const botonBorrar = document.querySelector("[data-borrar]");
const textoValorSuperior = document.querySelector("[data-valor-superior]");
const textoValorInferior = document.querySelector("[data-valor-inferior]");



class Calculadora {
    constructor(textoValorInferior,textoValorSuperior){
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.valorInferior = " "
        this.valorSuperior = " "
        this.operador = undefined
    }

    agregarNumero(numero){
        if(numero === "." && this.valorInferior.includes(".")) return
    this.valorInferior = this.valorInferior + numero
    }
    imprimirDisplay(){
        this.textoValorInferior.innerText = this.valorInferior
        this.textoValorSuperior.innerText = this.valorSuperior 
    }
    borrar (){
        this.valorInferior = this.valorInferior.slice(0,-1)
    }
    elegirOperacion(operador){
        if(this.valorInferior == " ") return
        if(this.valorSuperior != " "){
            this.realizarCalculo()
        }
        this.operador = operador
        this.valorSuperior = this.valorInferior
        this.valorInferior = " "
    }
    realizarCalculo(){
        let resultado
        let numeroSuperior = parseFloat(this.valorSuperior)
        let numeroInferior = parseFloat(this.valorInferior)
        if(isNaN(numeroSuperior) || isNaN(numeroInferior)) return

        switch (this.operador){
            case "+":
                resultado = numeroSuperior + numeroInferior
                break
            case "-":
                resultado = numeroSuperior - numeroInferior
                break
            case "X":
                resultado = numeroSuperior * numeroInferior
                break
             case "÷":
                resultado = numeroSuperior / numeroInferior
                break
                default: return
        }

            this.valorInferior = resultado
            this.operador = undefined
            this.valorSuperior = " "
    }
    limpiarPantalla(){
        this.valorInferior = ""
        this.valorSuperior = ""
        this.operador = undefined
    }
}

const calculadora = new Calculadora (textoValorInferior,textoValorSuperior)

botonNumero.forEach(boton =>{
    boton.addEventListener("click", () =>{
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay()
    })
})


botonBorrar.addEventListener("click",function () {
        calculadora.borrar();
        calculadora.imprimirDisplay();
    })

botonOperador.forEach(boton =>{
    boton.addEventListener("click", () =>{
        calculadora.elegirOperacion(boton.innerText)
        calculadora.imprimirDisplay()
    })
})

botonIgual.addEventListener("click",function () {
    calculadora.realizarCalculo();
    calculadora.imprimirDisplay();
})

botonBorraTodo.addEventListener("click",function () {
    calculadora.limpiarPantalla();
    calculadora.imprimirDisplay();
})

