"use strict";

const equipoMaria = [62, 34, 55];
const equipoPaula = [35, 60, 59];
const equipoRebeca = [40, 39, 63];

const mediaEquipoMaria =
  (equipoMaria[0] + equipoMaria[1] + equipoMaria[2]) / equipoMaria.length;
const mediaEquipoPaula =
  (equipoPaula[0] + equipoPaula[1] + equipoPaula[2]) / equipoPaula.length;
const mediaEquipoRebeca =
  (equipoRebeca[0] + equipoRebeca[1] + equipoRebeca[2]) / equipoRebeca.length;

console.log(
  `El equipo de Maria tiene una media de ` + mediaEquipoMaria + ` puntos`
);

console.log(
  `El equipo de Paula tiene una media de ` + mediaEquipoPaula + ` puntos`
);

console.log(
  `El equipo de Rebeca tiene una media de ` + mediaEquipoRebeca + ` puntos`
);

function equipoGanador() {
  if (
    mediaEquipoMaria > mediaEquipoPaula &&
    mediaEquipoMaria > mediaEquipoRebeca
  )
    console.log(`El ganador es el Equipo de Maria`);
  if (
    mediaEquipoPaula > mediaEquipoMaria &&
    mediaEquipoPaula > mediaEquipoRebeca
  )
    console.log(`El ganador es el Equipo de Paula`);
  if (
    mediaEquipoRebeca > mediaEquipoMaria &&
    mediaEquipoRebeca > mediaEquipoPaula
  )
    console.log(`El ganador es el Equipo de Rebeca`);
}

equipoGanador();
