/*
Tarea 1: Factorial de un número
Solicite un número entero positivo al usuario. 
Usando un bucle FOR, calcule y muestre su factorial.
Ejemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.

*/

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número entero positivo: ", (num) => {
    let n = parseInt(num);

    if (isNaN(n) || n < 0) {
        console.log("Por favor, ingrese un número entero positivo válido.");
    } else {
        let factorial = 1;
        let proceso = "";

        for (let i = n; i >= 1; i--) {
            factorial *= i;
            proceso += i + (i > 1 ? " × " : "");
        }

        console.log(`${n}! = ${proceso} = ${factorial}`);
    }

    rl.close();
});