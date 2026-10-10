/*
TAREA 3: Manejo de Cadenas
Requiere: npm install readline-sync
*/

const readlineSync = require('readline-sync');

// Función para contar vocales
function contarVocales(cadena) {
    let contador = 0;
    const vocales = 'aáeéiíoóuüAÁEÉIÍOÓUÜ';
    for (const caracter of cadena) {
        if (vocales.includes(caracter)) {
            contador++;
        }
    }
    return contador;
}

// Función para invertir una cadena
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

// Función para verificar si es palíndromo
function esPalindromo(cadena) {
    // Normalizar: pasar a minúsculas, remover espacios y acentos
    let textoLimpio = cadena
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '');

    let textoInvertido = invertirCadena(textoLimpio);
    return textoLimpio === textoInvertido;
}

console.log('=== TAREA 3: MANEJO DE CADENAS ===');

let texto = readlineSync.question('Ingrese una palabra o frase: ');

if (!texto.trim()) {
    console.log('No ingresó un texto válido.');
} else {
    let cantidadVocales = contarVocales(texto);
    let textoInvertido = invertirCadena(texto);
    let resultadoPalindromo = esPalindromo(texto) ? 'Sí es un palíndromo' : 'No es un palíndromo';

    console.log('\n=== RESULTADOS ===');
    console.log('Texto ingresado: "' + texto + '"');
    console.log('Cantidad de vocales: ' + cantidadVocales);
    console.log('Cadena invertida: ' + textoInvertido);
    console.log('Evaluación de palíndromo: ' + resultadoPalindromo);
}