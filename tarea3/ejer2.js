/*Tarea 2: Comparar calificaciones
Solicite al usuario dos calificaciones (0-100). 
Compare cuál es la más alta. Si son iguales, indíquelo. 
Muestre un mensaje descriptivo con el resultado.*/

import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*pregunta al usuario para obtener dos calificaciones*/
rl.question('Ingrese la primera calificación (0-100): ', (input1) => {
  const calificacion1 = parseFloat(input1);
  
  rl.question('Ingrese la segunda calificación (0-100): ', (input2) => {
    const calificacion2 = parseFloat(input2);
    
    /*compara las dos calificaciones y muestra el resultado*/
    if (calificacion1 > calificacion2) {
      console.log(`La primera calificación (${calificacion1}) es mayor que la segunda (${calificacion2}).`);
    } else if (calificacion1 < calificacion2) {
      console.log(`La segunda calificación (${calificacion2}) es mayor que la primera (${calificacion1}).`);
    } else {
      console.log('Ambas calificaciones son iguales.');
    }
    
    rl.close();
  });
});

