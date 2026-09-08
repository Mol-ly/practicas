/*Tarea 1: Validar número positivo, negativo o cero
Solicite un número al usuario usando readline. Verifique si es positivo, 
negativo o cero. Muestre un mensaje que indique el resultado: "El número es positivo", 
"El número es negativo" o "El número es cero".*/

import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*pregunta al usuario para obtener un número*/
rl.question('Ingrese un número: ', (input) => {
  const numero = parseFloat(input);
  
  /*verifica si el número es positivo, negativo o cero*/    
    if (numero > 0) {

        console.log('El número es positivo.');  
    } else if (numero < 0) {
        console.log('El número es negativo.');  
    }
    else {
        console.log('El número es cero.');  
    }
    rl.close();
});

