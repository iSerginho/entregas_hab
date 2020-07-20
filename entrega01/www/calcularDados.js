"use strict";

function tirarDados() {
  let tiradaDados;
  let totalTiradas = 0;

  for (let numeroTiradas = 0; totalTiradas <= 50; numeroTiradas++) {
    tiradaDados = Math.ceil(Math.random() * 6);
    totalTiradas = tiradaDados + totalTiradas;
    console.log(
      `Tirada ` +
        (numeroTiradas + 1) +
        ` ha salido un ` +
        tiradaDados +
        `. Tienes un total de ` +
        totalTiradas +
        ` puntos.`
    );
  }
  console.log(
    `¡Enhorabuena, ha salido un ` +
      tiradaDados +
      ` ¡Has ganado con un total de ` +
      totalTiradas
  );
}

tirarDados();
