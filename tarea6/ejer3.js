/*
Tarea 3: Promedio de calificaciones
Solicite al usuario cuántas calificaciones desea ingresar. 
Usando un bucle FOR y readline, solicite cada calificación, 
acumule la suma y al final calcule y muestre el promedio. 
Además, muestre la calificación más alta y la más baja ingresada.
*/
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántas calificaciones desea ingresar? ", (cantidad) => {
    let totalNotas = parseInt(cantidad);

    if (isNaN(totalNotas) || totalNotas <= 0) {
        console.log("Ingrese una cantidad válida de calificaciones.");
        rl.close();
    } else {
        let suma = 0;
        let notaMasAlta = -Infinity;
        let notaMasBaja = Infinity;
        let contador = 1;

        // Función recursiva para solicitar cada calificación de forma secuencial
        function pedirCalificacion() {
            if (contador <= totalNotas) {
                rl.question(`Ingrese la calificación ${contador}: `, (entrada) => {
                    let nota = parseFloat(entrada);

                    if (isNaN(nota)) {
                        console.log("Nota no válida. Intente de nuevo.");
                        pedirCalificacion();
                    } else {
                        suma += nota;

                        if (nota > notaMasAlta) notaMasAlta = nota;
                        if (nota < notaMasBaja) notaMasBaja = nota;

                        contador++;
                        pedirCalificacion();
                    }
                });
            } else {
                let promedio = suma / totalNotas;
                console.log("\n--- RESULTADOS ---");
                console.log(`Promedio general: ${promedio.toFixed(2)}`);
                console.log(`Calificación más alta: ${notaMasAlta}`);
                console.log(`Calificación más baja: ${notaMasBaja}`);
                rl.close();
            }
        }

        pedirCalificacion();
    }
});