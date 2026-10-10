const readlineSync = require('readline-sync');

let suma = 0;
let contador = 0;

console.log('=== SUMA HASTA SUPERAR 100 ===');

// Se repite MIENTRAS la suma sea menor o igual a 100
while (suma <= 100) {
    let entrada = readlineSync.question('Ingrese un numero: ');
    let numero = parseFloat(entrada);

    // Validación: comprobar si no es un número válido
    if (isNaN(numero)) {
        console.log("El dato debe ser numerico.\n");
    } else {
        suma += numero;
        contador++;
        console.log('Suma actual: ' + suma + '\n');
    }
}

// Los resultados finales se muestran AFUERA del bucle
console.log('=== RESULTADO FINAL ===');
console.log('Suma total: ' + suma);
console.log('Cantidad de numeros ingresados: ' + contador);