/*Tarea 3: Calcular edad y años de experiencia
Solicite al usuario su año de nacimiento. Obtenga el año actual, calcule su edad y muestre: "Tu edad aproximada es: X años."*/

import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*pregunta al usuario su año de nacimiento*/
rl.question('Ingrese su año de nacimiento: ', (añoNacimiento) => {
  const añoActual = new Date().getFullYear();
  const edad = añoActual - parseInt(añoNacimiento);

  /*Muestra la edad aproximada al usuario*/
  console.log(`Tu edad aproximada es: ${edad} años.`);

  rl.close();
});
