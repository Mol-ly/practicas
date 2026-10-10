const readlineSync = require('readline-sync');

let opcion;

do {
    console.log('\n=== MENU INTERACTIVO ===');
    console.log('1) Saludar');
    console.log('2) Mostrar fecha actual');
    console.log('3) Salir');

    opcion = readlineSync.question('Seleccione una opcion (1-3): ').trim();

    switch (opcion) {
        case '1':
            console.log('\n¡Hola! Espero que tengas un excelente dia.');
            break;
        case '2':
            console.log('\nFecha y hora actual: ' + new Date().toLocaleString());
            break;
        case '3':
            console.log('\nSaliendo del programa... ¡Hasta luego!');
            break;
        default:
            console.log('\nOpción no válida. Por favor, intente de nuevo.');
            break;
    }

} while (opcion !== '3');