"use srtrict";

/*
ENTREGA 2: JS I

1) Dada la función LetterCount(str) toma el parámetro str que se está pasando
y devuelve la primera palabra de mayor longitud.Por ejemplo:
Hoy es un día estupendo y fantástico.
debe devolver fantástico porque es la primera palabra que más letras tiene.
*/
function LetterCount(str) {
  const strPalabra = str.split(" ");
  let tamanoPalabra = 0;
  let palabraMasLarga;
  for (let i = 0; i < strPalabra.length; i++) {
    if (strPalabra[i].length > tamanoPalabra) {
      tamanoPalabra = strPalabra[i].length;
      palabraMasLarga = strPalabra[i];
    }
    console.log(palabraMasLarga);
    console.log(tamanoPalabra);
  }
  console.log(`La palabra mas larga es ${palabraMasLarga}`);
}

LetterCount("Hoy es un dia estupendo y fantastico");
