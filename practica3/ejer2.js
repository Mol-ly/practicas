/*Comparar dos números: Solicite dos números. 
Compare cuál es mayor y muestre el resultado. Si son iguales, indíquelo.*/

import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*pregunta al usuario para obtener dos números*/
rl.question('Ingrese el primer número: ', (input1) => {
  const numero1 = parseFloat(input1);
  
  rl.question('Ingrese el segundo número: ', (input2) => {
    const numero2 = parseFloat(input2);
    
    /*compara los dos números y muestra el resultado*/
    if (numero1 > numero2) {
      console.log(`El número ${numero1} es mayor que ${numero2}.`);
    } else if (numero1 < numero2) {
      console.log(`El número ${numero2} es mayor que ${numero1}.`);
    } else {
      console.log('Ambos números son iguales.');
    }
    
    rl.close();
  });
});
    
