/*
TAREA 1: Adivinar el Número Secreto (WHILE)
Requiere: npm install readline-sync
*/

const readlineSync = require('readline-sync');

// Generar número secreto entre 1 y 50
const numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intento = 0;
let contadorIntentos = 0;

console.log('=== ADIVINA EL NÚMERO SECRETO ===');
console.log('He pensado un número entre 1 y 50. ¡Intenta adivinarlo!\n');

// Bucle WHILE: se repite hasta que el intento sea igual al número secreto
while (intento !== numeroSecreto) {
    intento = parseInt(readlineSync.question('Ingrese su numero: '));

    if (isNaN(intento)) {
        console.log('Por favor, ingrese un número entero válido.\n');
    } else {
        contadorIntentos++;

        if (intento < numeroSecreto) {
            console.log('El número secreto es MAYOR.\n');
        } else if (intento > numeroSecreto) {
            console.log('El número secreto es MENOR.\n');
        }
    }
}

console.log('=== ¡FELICIDADES! ===');
console.log('¡Adivinaste el número secreto (' + numeroSecreto + ')!');
console.log('Total de intentos realizados: ' + contadorIntentos);