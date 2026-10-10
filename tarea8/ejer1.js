/*
TAREA 1: Sistema de Calificaciones con Funciones
Requiere: npm install readline-sync
*/

const readlineSync = require('readline-sync');

// Función para obtener la letra según la nota (0-100)
function obtenerLetra(nota) {
    if (nota >= 90) return 'A';
    if (nota >= 80) return 'B';
    if (nota >= 70) return 'C';
    if (nota >= 60) return 'D';
    return 'F';
}

// Función para calcular el promedio de un arreglo de notas
function calcularPromedio(notas) {
    if (notas.length === 0) return 0;
    let suma = 0;
    for (const nota of notas) {
        suma += nota;
    }
    return suma / notas.length;
}

console.log('=== TAREA 1: SISTEMA DE CALIFICACIONES ===');

let cantidad = parseInt(readlineSync.question('¿Cuantas calificaciones desea ingresar?: '));

if (isNaN(cantidad) || cantidad <= 0) {
    console.log('Debe ingresar una cantidad valida mayor a 0.');
} else {
    const calificaciones = [];

    // Bucle para solicitar cada calificación
    for (let i = 1; i <= cantidad; i++) {
        let nota = parseFloat(readlineSync.question('Ingrese la calificacion ' + i + ' (0-100): '));

        while (isNaN(nota) || nota < 0 || nota > 100) {
            console.log('Por favor, ingrese un numero valido entre 0 y 100.');
            nota = parseFloat(readlineSync.question('Ingrese la calificacion ' + i + ' (0-100): '));
        }

        calificaciones.push(nota);
    }

    console.log('\n=== RESULTADOS ===');
    
    // Mostrar cada calificación con su letra
    for (let i = 0; i < calificaciones.length; i++) {
        let notaActual = calificaciones[i];
        let letraActual = obtenerLetra(notaActual);
        console.log('Calificación ' + (i + 1) + ': ' + notaActual + ' -> Letra: ' + letraActual);
    }

    // Promedio final
    let promedio = calcularPromedio(calificaciones);
    let letraPromedio = obtenerLetra(promedio);

    console.log('-----------------------------------');
    console.log('Promedio general: ' + promedio.toFixed(2));
    console.log('Letra del promedio: ' + letraPromedio);
}