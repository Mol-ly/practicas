//Sumar los primeros n números pares de forma recursiva
function sumaPares(n) {
    if (n <= 0) {
        return 0;
    }
    return (2 * n) + sumaPares(n - 1);
}

//Sumar los primeros n números impares de forma recursiva
function sumaImpares(n) {
    if (n <= 0) {
        return 0;
    }
    return (2 * n - 1) + sumaImpares(n - 1);
}

//Calcular el n-ésimo término de la serie de Fibonacci de forma recursiva
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let opcion = parseInt(prompt(
    "Tarea 2 - Menú de Opciones:\n" +
    "1. Sumar los primeros n números pares\n" +
    "2. Sumar los primeros n números impares\n" +
    "3. Calcular el n-ésimo término de la serie de Fibonacci\n\n" +
    "Elija una opción (1-3):"
));

let nT2 = parseInt(prompt("Ingrese el valor de n:"));

if (!isNaN(nT2) && nT2 >= 0) {
    console.log("--- TAREA 2 ---");
    switch (opcion) {
        case 1:
            console.log(`La suma de los primeros ${nT2} números pares es: ${sumaPares(nT2)}`);
            break;
        case 2:
            console.log(`La suma de los primeros ${nT2} números impares es: ${sumaImpares(nT2)}`);
            break;
        case 3:
            console.log(`El término ${nT2} de la serie de Fibonacci es: ${fibonacci(nT2)}`);
            break;
        default:
            console.log("Opción no válida. Por favor, ejecute de nuevo y elija entre 1 y 3.");
    }
} else {
    console.log("El valor de n ingresado no es válido.");
}