/*Tarea 4: Validar requisitos de empleado
Solicite nombre, edad y años de experiencia.
 Valide que la edad sea mayor a 18 Y que la experiencia sea mayor a 0. 
 Si cumple ambas condiciones, muestre "Candidato válido". Si no cumple, muestre "No cumple con los requisitos".
*/

import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*pregunta al usuario para obtener nombre, edad y años de experiencia*/
rl.question('Ingrese su nombre: ', (nombre) => {
  rl.question('Ingrese su edad: ', (inputEdad) => {
    const edad = parseInt(inputEdad);
    
    rl.question('Ingrese sus años de experiencia: ', (inputExperiencia) => {
      const experiencia = parseInt(inputExperiencia);
      
      /*valida los requisitos del candidato y muestra el resultado*/
      if (edad > 18 && experiencia > 0) {
        console.log(`Candidato válido: ${nombre}`);
      } else {
        console.log(`No cumple con los requisitos: ${nombre}`);
      }
      
      rl.close();
    });
  });
});