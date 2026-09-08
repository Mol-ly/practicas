/*Validar calificación: Solicite una calificación (0-100). 
Muestre si aprobó (>=60) o reprobó (<60).*/

import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*pregunta al usuario para obtener una calificación*/
rl.question('Ingrese una calificación (0-100): ', (input) => {
  const calificacion = parseFloat(input);
  
  /*verifica si la calificación es aprobatoria o reprobatoria*/
    if (calificacion >= 60) {
        console.log('¡Felicidades! Aprobó la materia.');
    } else {
        console.log('Lo siento, reprobó la materia.');
    }
    rl.close();
});
    
