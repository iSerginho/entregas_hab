"use strict";

let contador;

function esPrimo(numero) {
  for (contador = 2; contador < numero; contador++) {
    if (numero % contador === 0) {
      console.log(`El numero ` + numero + ` no es primo`);
    }
  }
  if (numero % contador !== 0) {
    console.log(`El numero ` + numero + ` es primo`);
  }
}

esPrimo(7); // Introducimos un numero mayor que 2 para verificar si es o no es un numero primo
