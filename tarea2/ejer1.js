/*Tarea 1: Procesar nombre de usuario
Solicite al usuario su nombre completo.
Convierta el nombre a mayúsculas, extraiga las primeras 4 letras y luego conviértalo a minúsculas. Muestre todos los resultados.*/

import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*pregunta al usuario su nombre completo*/
rl.question("Ingrese su nombre completo: ", (nombre) => {
  const nombreMayusculas = nombre.toUpperCase();
  const primerasCuatroLetras = nombre.substring(0, 4);
  const primerasCuatroLetrasMinusculas = primerasCuatroLetras.toLowerCase();

  /*Muestra los resultados al usuario*/
  console.log(`Nombre en mayúsculas: ${nombreMayusculas}`);
  console.log(`Primeras 4 letras: ${primerasCuatroLetras}`);
  console.log(`Primeras 4 letras en minúsculas: ${primerasCuatroLetrasMinusculas}`);

  rl.close();
});
