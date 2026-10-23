//Función recursiva que calcula el factorial de un número entero positivo
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

//Función recursiva que calcula la potencia sin usar el operador ** 
function potencia(base, exponente) {
    // Caso base: cualquier número elevado a 0 es 1
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}

//Función recursiva que suma todos los números desde 1 hasta n
function sumaHastaN(n) {
    if (n === 1) {
        return 1;
    }
    if (n <= 0) {
        return 0;
    }
    return n + sumaHastaN(n - 1);
}

let numeroT1 = parseInt(prompt("Tarea 1: Ingrese un número entero positivo:"));

if (!isNaN(numeroT1) && numeroT1 >= 0) {
    console.log(`--- TAREA 1 (Número: ${numeroT1}) ---`);
    console.log(`factorial(${numeroT1}) = ${factorial(numeroT1)}`);
    console.log(`potencia(${numeroT1}, ${numeroT1}) = ${potencia(numeroT1, numeroT1)}`);
    console.log(`sumaHastaN(${numeroT1}) = ${sumaHastaN(numeroT1)}`);
} else {
    console.log("Por favor, ingrese un número entero positivo válido.");
}