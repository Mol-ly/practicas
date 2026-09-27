/*
Tarea 2: Números primos
Solicite un número N. Usando un bucle FOR, 
determine si el número es primo o no. 
Un número primo solo es divisible entre 1 y sí mismo. 
Muestre el resultado. 
Además, muestre todos los números primos desde 1 hasta N.
*/

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función auxiliar para verificar si un número es primo usando FOR
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

rl.question("Ingrese un número N: ", (n) => {
    let N = parseInt(n);

    if (isNaN(N) || N < 1) {
        console.log("Por favor, ingrese un número mayor o igual a 1.");
    } else {
        // 1. Determinar si N es primo
        if (esPrimo(N)) {
            console.log(`El número ${N} ES primo.`);
        } else {
            console.log(`El número ${N} NO es primo.`);
        }

        // 2. Listar todos los primos desde 1 hasta N
        let primosEncontrados = [];
        for (let i = 1; i <= N; i++) {
            if (esPrimo(i)) {
                primosEncontrados.push(i);
            }
        }

        console.log(`Números primos desde 1 hasta ${N}: ${primosEncontrados.join(", ")}`);
    }

    rl.close();
});