/*
    Tabla de multiplicar: Solicite un número al usuario y muestre su tabla de multiplicar del 1 al 10 usando un bucle FOR. Formato: "5 x 1 = 5", "5 x 2 = 10", etc.
*/

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Tabla de multiplicar, Ingrese un número: ", (num) => {
    let numMulti = parseInt(num);

    for (let i = 1; i <= 10; i++) {
        let resultado = numMulti * i;
        console.log(`${numMulti} x ${i} = ${resultado}`);
    }

    rl.close();
});