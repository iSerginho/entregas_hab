"use strict";

//Calculadora simple para sumar, restar, dividir, multiplicar y elevar un numero a una potencia

// utilizando Switch

let primerNumero;
let segundoNumero;

function calculadoraSimple(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
    case "-":
      return primerNumero - segundoNumero;
    case "*":
      return primerNumero * segundoNumero;
    case "/":
      return primerNumero / segundoNumero;
    case "^":
      return segundoNumero ** primerNumero;
    default:
      return "error";
  }
}

let resultadoCalculadora;

resultadoCalculadora = calculadoraSimple(500, 12, "+");
console.log(`El resultado de la suma es ` + resultadoCalculadora);

resultadoCalculadora = calculadoraSimple(1000, 488, "-");
console.log(`El resultado de la resta es ` + resultadoCalculadora);

resultadoCalculadora = calculadoraSimple(4, 128, "*");
console.log(`El resultado de la multiplicacion es ` + resultadoCalculadora);

resultadoCalculadora = calculadoraSimple(1024, 2, "/");
console.log(`El resultado de la division es ` + resultadoCalculadora);

resultadoCalculadora = calculadoraSimple(9, 2, "^");
console.log(`El resultado es ` + resultadoCalculadora);
