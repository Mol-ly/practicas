const readlineSync = require('readline-sync');

// Función para determinar si es Par o Impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

// Función para determinar si es Primo
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

console.log('=== VALIDACIÓN DE NÚMEROS ===');

let numero = parseInt(readlineSync.question('Ingrese un numero entero: '));

if (isNaN(numero)) {
    console.log('El dato debe ser un numero entero valido.');
} else {
    let paridad = esParOImpar(numero);
    let primo = esPrimo(numero) ? "Es primo" : "No es primo";

    console.log('\n=== RESULTADOS ===');
    console.log('El numero ' + numero + ' es: ' + paridad);
    console.log('El numero ' + numero + ': ' + primo);
}