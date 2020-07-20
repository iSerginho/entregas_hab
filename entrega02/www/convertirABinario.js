"use strict";

/*
2) Haz que la función BinaryConverter(str) devuelva la forma decimal del valor binario.
Por ejemplo: si se pasa 101 el programa debe retornar un 5,
si se pasa 1000 debe retornar un 8, etc.
Si no sabes como convertir un número binario a decimal puedes echar un ojo a este vídeo:
https://www.youtube.com/watch?v=bBMhiSy1Grc
*/

function BinaryConverter(str) {
  let binarioTemp = 1;
  let decimal = 0;
  for (let i = 0; i < str.length; i++) {
    let temp;
    temp = +str[str.length - i - 1];
    if (temp === 1) {
      decimal = decimal + binarioTemp;
    }
    binarioTemp = binarioTemp * 2;
  }
  console.log(decimal);
}

BinaryConverter("101");
