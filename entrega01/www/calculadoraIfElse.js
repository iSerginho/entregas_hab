"use strict";

//Calculadora simple para sumar, restar, dividir, multiplicar y elevar un numero a una potencia

// utilizando if / else

let primerNumero;
let segundoNumero;

function calculadoraSimple(primerNumero, segundoNumero, operacion) {
  if (operacion === "+") {
    return primerNumero + segundoNumero;
  }
  if (operacion === "-") {
    return primerNumero - segundoNumero;
  }
  if (operacion === "*") {
    return primerNumero * segundoNumero;
  }
  if (operacion === "/") {
    return primerNumero / segundoNumero;
  }
  if (operacion === "^") {
    return segundoNumero ** primerNumero;
  } else {
    return "error";
  }
}

let resultadoCalculadora;

resultadoCalculadora = calculadoraSimple(13, 51, "+");
console.log(`El resultado de la suma es ` + resultadoCalculadora);

resultadoCalculadora = calculadoraSimple(98, 34, "-");
console.log(`El resultado de la resta es ` + resultadoCalculadora);

resultadoCalculadora = calculadoraSimple(32, 2, "*");
console.log(`El resultado de la multiplicacion es ` + resultadoCalculadora);

resultadoCalculadora = calculadoraSimple(512, 8, "/");
console.log(`El resultado de la division es ` + resultadoCalculadora);

resultadoCalculadora = calculadoraSimple(6, 2, "^");
console.log(`El resultado es ` + resultadoCalculadora);
