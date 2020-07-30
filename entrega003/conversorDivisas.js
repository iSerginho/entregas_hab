'use strict';

const euros = 38;
console.log(`Introduce la catidad a cambiar ${euros} €`);

async function cambioEuroDolarYen(euros) {
  const response1 = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
  const responseData = await response1.json();
  const dolarChange = responseData.rates.USD * euros;
  const dateChange = responseData.date;
  console.log(`Hoy ${dateChange}, estos ${euros}€ al cambio son ${dolarChange.toFixed(2)}$`);
  const yenChange = responseData.rates.JPY * dolarChange;
  console.log(`Hoy ${dateChange}, la cantidad de ${dolarChange.toFixed(2)}$ al cambio son ${yenChange.toFixed(2)}¥`);
}
cambioEuroDolarYen(euros);

