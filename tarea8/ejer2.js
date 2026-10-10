/*
TAREA 2: Funciones para Figuras Geométricas
Requiere: npm install readline-sync
*/

const readlineSync = require('readline-sync');

// Funciones para el Círculo
function areaCirculo(radio) { return Math.PI * Math.pow(radio, 2); }
function perimetroCirculo(radio) { return 2 * Math.PI * radio; }

// Funciones para el Cuadrado
function areaCuadrado(lado) { return lado * lado; }
function perimetroCuadrado(lado) { return 4 * lado; }

// Funciones para el Rectángulo
function areaRectangulo(base, altura) { return base * altura; }
function perimetroRectangulo(base, altura) { return 2 * (base + altura); }

// Funciones para el Triángulo
function areaTriangulo(base, altura) { return (base * altura) / 2; }
function perimetroTriangulo(l1, l2, l3) { return l1 + l2 + l3; }

console.log('=== TAREA 2: FIGURAS GEOMÉTRICAS ===');
console.log('1) Círculo');
console.log('2) Cuadrado');
console.log('3) Rectángulo');
console.log('4) Triángulo');

let opcion = readlineSync.question('Seleccione una figura (1-4): ').trim();

switch (opcion) {
    case '1': {
        let radio = parseFloat(readlineSync.question('Ingrese el radio del circulo: '));
        if (isNaN(radio) || radio <= 0) {
            console.log('Valor no valido.');
        } else {
            console.log('\n=== RESULTADO ===');
            console.log('Área: ' + areaCirculo(radio).toFixed(2));
            console.log('Perímetro: ' + perimetroCirculo(radio).toFixed(2));
        }
        break;
    }
    case '2': {
        let lado = parseFloat(readlineSync.question('Ingrese el lado del cuadrado: '));
        if (isNaN(lado) || lado <= 0) {
            console.log('Valor no valido.');
        } else {
            console.log('\n=== RESULTADO ===');
            console.log('Área: ' + areaCuadrado(lado).toFixed(2));
            console.log('Perímetro: ' + perimetroCuadrado(lado).toFixed(2));
        }
        break;
    }
    case '3': {
        let base = parseFloat(readlineSync.question('Ingrese la base del rectangulo: '));
        let altura = parseFloat(readlineSync.question('Ingrese la altura del rectangulo: '));
        if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
            console.log('Valores no validos.');
        } else {
            console.log('\n=== RESULTADO ===');
            console.log('Área: ' + areaRectangulo(base, altura).toFixed(2));
            console.log('Perímetro: ' + perimetroRectangulo(base, altura).toFixed(2));
        }
        break;
    }
    case '4': {
        let base = parseFloat(readlineSync.question('Ingrese la base del triangulo: '));
        let altura = parseFloat(readlineSync.question('Ingrese la altura del triangulo: '));
        let l1 = parseFloat(readlineSync.question('Ingrese el lado 1: '));
        let l2 = parseFloat(readlineSync.question('Ingrese el lado 2: '));
        let l3 = parseFloat(readlineSync.question('Ingrese el lado 3: '));

        if (isNaN(base) || isNaN(altura) || isNaN(l1) || isNaN(l2) || isNaN(l3)) {
            console.log('Valores no validos.');
        } else {
            console.log('\n=== RESULTADO ===');
            console.log('Área: ' + areaTriangulo(base, altura).toFixed(2));
            console.log('Perímetro: ' + perimetroTriangulo(l1, l2, l3).toFixed(2));
        }
        break;
    }
    default:
        console.log('Opción no válida.');
        break;
}