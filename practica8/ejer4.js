const readlineSync = require('readline-sync');

// Función de Celsius a Fahrenheit: (C * 9/5) + 32
function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Función de Fahrenheit a Celsius: (F - 32) * 5/9
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log('=== CONVERSOR DE TEMPERATURAS ===');
console.log('1) Celsius a Fahrenheit');
console.log('2) Fahrenheit a Celsius');

let opcion = readlineSync.question('Seleccione el tipo de conversion (1 o 2): ').trim();

if (opcion !== '1' && opcion !== '2') {
    console.log('Opción no valida.');
} else {
    let temp = parseFloat(readlineSync.question('Ingrese la temperatura a convertir: '));

    if (isNaN(temp)) {
        console.log('El dato ingresado no es un numero valido.');
    } else {
        console.log('\n=== RESULTADO ===');
        if (opcion === '1') {
            let res = celsiusAFahrenheit(temp);
            console.log(temp + '°C equivalen a ' + res.toFixed(2) + '°F');
        } else {
            let res = fahrenheitACelsius(temp);
            console.log(temp + '°F equivalen a ' + res.toFixed(2) + '°C');
        }
    }
}