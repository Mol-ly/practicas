/* 
    Piramide de asteriscos: Solicite al usuario la cantidad de filas. Usando bucles FOR anidados, dibuje una pirámide de asteriscos. Ejemplo para 4 filas: primera fila un asterisco, segunda dos, tercera tres, cuarta cuatro.
*/

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿De cuantas filas quiere su piramide? R/", (filaPiramide) => {
    let fila = parseInt(filaPiramide);

        for (let i = 1; i <= fila; i++) {
            let linea = ""; 
            
            for (let j = 1; j <= i; j++) {
                linea += "*";
            }

            console.log(linea);
        }
    

    rl.close();
});
