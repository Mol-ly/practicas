/*
    Suma de números pares e impares: Solicite un número N. Usando un bucle FOR, recorra del 1 al N y calcule por separado la suma de los números pares y la suma de los impares. Muestre ambos resultados.
*/

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question("N es igual a :", (n) => {
    let N = parseInt(n);
    let numPar = 0;
    let numeImpar = 0;

    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            numPar = numPar + i;
        } else {
            numeImpar = numeImpar + i;
        }
    }

    console.log(`Suma de pares: ${numPar}`);
    console.log(`Suma de impares: ${numeImpar}`);

    rl.close();
});