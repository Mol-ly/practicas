/*Tarea 2: Clasificador de números con múltiples condiciones
Solicite tres números al usuario (a, b, c). Usando IF...ELSE IF y operadores 
lógicos, determine y muestre:
- Si los tres son iguales: "Los tres números son iguales"
- Si los tres son diferentes: "Los tres números son diferentes"
- Si exactamente dos son iguales: "Hay dos números iguales"
- Además, indique cuál de los tres números es el mayor y cuál es el menor.
- Si algún número es negativo, agregue el mensaje "Hay números negativos".*/

import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer número (a): ', (inputA) => {
    rl.question('Ingrese el segundo número (b): ', (inputB) => {
        rl.question('Ingrese el tercer número (c): ', (inputC) => {
            const a = parseFloat(inputA);
            const b = parseFloat(inputB);
            const c = parseFloat(inputC);

            if (a < 0 || b < 0 || c < 0) {
                console.log('Hay números negativos.');
            }

            if (a === b && b === c) {
                console.log('Los tres números son iguales.');
            } else if (a !== b && a !== c && b !== c) {
                console.log('Los tres números son diferentes.');
            } else {
                console.log('Hay dos números iguales.');
            }

            const mayor = Math.max(a, b, c);
            const menor = Math.min(a, b, c);

            console.log(`El número mayor es: ${mayor}`);
            console.log(`El número menor es: ${menor}`);

            rl.close();
        });
    });
});