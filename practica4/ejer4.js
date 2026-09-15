import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Seleccione una opción de conversión:');
console.log('1) Convertir de grados Celsius a Fahrenheit');
console.log('2) Convertir de grados Fahrenheit a Celsius');
console.log('3) Salir');

rl.question('Ingrese el número de la opción deseada: ', (opcion) => {
    switch (opcion) {
        case '1':
            rl.question('Ingrese la temperatura en grados Celsius: ', (celsius) => {
                const fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
                console.log(`${celsius}°C = ${fahrenheit}°F`);
                rl.close();
            });
            break;
        case '2':
            rl.question('Ingrese la temperatura en grados Fahrenheit: ', (fahrenheit) => {
                const celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
                console.log(`${fahrenheit}°F = ${celsius}°C`);
                rl.close();
            });
            break;
        case '3':
            rl.close();
            break;
        default:
            console.log('Opción no válida. Intente nuevamente.');
            rl.close();
    }
});
