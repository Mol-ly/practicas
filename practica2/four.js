//fecha actual, dia mes, año y al final personalizado

let fecha = new Date();

let dia = fecha.getDate();

let mes = fecha.getMonth() + 1;

let anio = fecha.getFullYear();

console.log(`La fecha actual es :  ${dia}/${mes}/${anio} `);