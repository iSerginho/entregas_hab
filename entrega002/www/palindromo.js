"use strict";

/*
3) Haz que la función PalindromeTwo(str) tome el parámetro str que se le pasa
y devuelva true si el parámetro es un palíndromo,
(la cadena se lee igual hacia adelante que hacia atrás) de lo contrario devuelve false.
Por ejemplo: Arriba la birra debería devolver true, se lee igual del derecho que del revés.
*/

function PalindromeTwo(str) {
  console.log(str);
  // str = str.replace(" ", "");
  //str = str.toLowerCase();
  str = str
    .toLowerCase()
    .split(" ")
    .join("");
  console.log(str);
  let frase = [];
  console.log(frase);
  frase = str.split("");
  console.log(frase);
  let fraseAlReves = "";
  for (let i = 0; i < str.length; i++) {
    frase.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    fraseAlReves = fraseAlReves + frase.pop();
  }
  if (fraseAlReves === str) {
    console.log("True");
  } else {
    console.log("False");
  }
}

PalindromeTwo("Arriba la birra");
