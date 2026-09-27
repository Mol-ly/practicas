/*
    Serie de Fibonacci: Solicite al usuario cuántos términos de la serie Fibonacci desea ver. Usando un bucle FOR, genere y muestre la serie. La serie comienza: 0, 1, 1, 2, 3, 5, 8, 13...
*/

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántos términos de la serie Fibonacci desea ver? R/", (cantidad) => {
    let n = parseInt(cantidad);

    if (isNaN(n) || n <= 0) {
        console.log("Por favor, ingrese un número entero mayor a 0.");
    } else {
        let a = 0;
        let b = 1;
        let serie = "";

        for (let i = 1; i <= n; i++) {
            serie += a + (i < n ? ", " : ""); 

            let siguiente = a + b; // Suma los dos valores anteriores
            a = b;                 
            b = siguiente;         // El segundo valor toma la nueva suma
        }

        console.log(`Serie de Fibonacci (${n} términos):`);
        console.log(serie);
    }

    rl.close();
});