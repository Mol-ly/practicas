const readlineSync = require('readline-sync');

// Funciones para las operaciones básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir entre cero.";
    }
    return a / b;
}

console.log('=== CALCULADORA CON FUNCIONES ===');

let num1 = parseFloat(readlineSync.question('Ingrese el primer numero: '));
let num2 = parseFloat(readlineSync.question('Ingrese el segundo numero: '));

if (isNaN(num1) || isNaN(num2)) {
    console.log('Por favor, ingrese valores numericos validos.');
} else {
    let operador = readlineSync.question('Ingrese el operador (+, -, *, /): ').trim();
    let resultado;

    switch (operador) {
        case '+':
            resultado = sumar(num1, num2);
            break;
        case '-':
            resultado = restar(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = 'Operador no valido.';
            break;
    }

    console.log('\n=== RESULTADO ===');
    console.log('Resultado: ' + resultado);
}