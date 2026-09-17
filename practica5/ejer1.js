/* Ejercicio Práctico 1: 
Sistema de calificación con bonificación Solicite al usuario su nombre, 
su calificación final (0-100) y si entregó todos los trabajos (si/no). 
Si la calificación es >= 90 y entregó todos los trabajos, 
su nota final se incrementa en 5 puntos (sin pasar de 100). 
Si la calificación es >= 70 pero < 90, y entregó todos los trabajos, 
su nota se incrementa en 3 puntos. 
Si la calificación es < 70, no hay bonificación. */

import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
    rl.question('Ingrese su calificación final (0-100): ', (calificacion) => {
        rl.question('¿Entregó todos los trabajos? (si/no): ', (entregados) => {
            let calificacionFinal = parseInt(calificacion);
            let bonificacion = 0;

            if (calificacionFinal >= 90 && entregados.toLowerCase() === 'si') {
                bonificacion = 5;
                calificacionFinal = Math.min(calificacionFinal + bonificacion, 100);
            } else if (calificacionFinal >= 70 && calificacionFinal < 90 && entregados.toLowerCase() === 'si') {
                bonificacion = 3;
                calificacionFinal += bonificacion;
            }

            console.log(`Nombre: ${nombre}`);
            console.log(`Calificación original: ${calificacion}`);
            console.log(`Bonificación aplicada: ${bonificacion}`);
            console.log(`Calificación final: ${calificacionFinal}`);

            rl.close();
        });
    });
});